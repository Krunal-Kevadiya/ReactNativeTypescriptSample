import { statusBarHeight } from '@theme';
import { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Animated, PanResponderGestureState } from 'react-native';
import type { InternalDataPropsType } from './Types';

function wrapperAnimStyle(animatedAlert: Animated.Value, minHeight: number): object {
  return {
    transform: [
      {
        translateY: animatedAlert.interpolate({
          inputRange: [0, 1],
          outputRange: [-minHeight, 0]
        })
      }
    ],
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    elevation: 1
  };
}

function applyAnimation(animatedAlert: Animated.Value, toValue: number, onComplete: () => void = () => {}): void {
  const duration: number = toValue === -1 ? 0 : 700;
  Animated.spring(animatedAlert, {
    toValue,
    // @ts-ignore
    duration,
    friction: 9,
    useNativeDriver: true,
    isInteraction: true
  }).start(onComplete);
}

function showAlert(
  data: InternalDataPropsType,
  animatedAlert: Animated.Value,
  setData: (data: InternalDataPropsType) => void,
  setOpen: (open: boolean) => void,
  setAutoTrigger: (isAutoTrigger: boolean) => void
): void {
  setData(data);
  setOpen(true);
  applyAnimation(animatedAlert, 1, () => {
    if (data.interval !== 0) setAutoTrigger(true);
  });
}

function hideAlert(
  animatedAlert: Animated.Value,
  toValue: number,
  setOpen: (open: boolean) => void,
  setAutoTrigger: (isAutoTrigger: boolean) => void
): void {
  applyAnimation(animatedAlert, toValue, () => {
    setOpen(false);
    setAutoTrigger(false);
  });
}

function useErrorAlert(translucent: boolean, ref: any) {
  const [isOpen, setOpen] = useState(false);
  const [isAutoTrigger, setAutoTrigger] = useState(false);
  const [minHeight, setMinHeight] = useState(0);
  const [data, setData] = useState<InternalDataPropsType | null>(null);
  const animatedAlert = useRef(new Animated.Value(0)).current;

  const handlerSwipeUp: (gestureState: PanResponderGestureState) => void | undefined | null = useCallback(() => {
    hideAlert(animatedAlert, data?.interval === 0 ? -1 : 0, setOpen, setAutoTrigger);
  }, [animatedAlert, data?.interval]);

  useEffect(() => {
    const handler =
      isAutoTrigger &&
      setTimeout(() => {
        hideAlert(animatedAlert, data?.interval === 0 ? -1 : 0, setOpen, setAutoTrigger);
      }, data?.interval);
    return () => {
      if (handler) clearTimeout(handler);
    };
  }, [animatedAlert, data, isAutoTrigger]);

  useImperativeHandle(ref, () => ({
    getAlertDynamicHeight: (): number => {
      return minHeight;
    },
    alertDynamicHeight: (height: number): number => {
      let localMinHeight = height;
      if (translucent) {
        localMinHeight += statusBarHeight();
      }
      setMinHeight(localMinHeight);
      return localMinHeight;
    },
    alertWithType: (message: string, image?: number, imageTint?: string, interval?: number): void => {
      const newData: InternalDataPropsType = { message, image, imageTint, interval };
      if (!isOpen) {
        showAlert(newData, animatedAlert, setData, setOpen, setAutoTrigger);
      } else if (data?.interval !== 0) {
        setData(newData);
      }
    },
    clearAlert: (): void => {
      setAutoTrigger(true);
    }
  }));

  return { animatedAlert, data, isOpen, minHeight, handlerSwipeUp };
}

export { wrapperAnimStyle, useErrorAlert };
