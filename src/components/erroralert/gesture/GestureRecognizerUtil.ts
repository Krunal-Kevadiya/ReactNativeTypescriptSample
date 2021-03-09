import { usePrevious } from '@hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GestureResponderEvent, PanResponder, PanResponderGestureState } from 'react-native';
import type { ConfigPropsType, GestureRecognizerPropsType, SwipeHandlerPropsType } from './Types';
import { SwipeDirectionsEnumType } from './Types';

const swipeConfig: ConfigPropsType = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
  gestureIsClickThreshold: 5
};

let classSwipeConfig: ConfigPropsType = swipeConfig;

function isValidSwipe(
  velocity: number,
  velocityThreshold: number,
  directionalOffset: number,
  directionalOffsetThreshold: number
): boolean {
  return Math.abs(velocity) > velocityThreshold && Math.abs(directionalOffset) < directionalOffsetThreshold;
}

function gestureIsClick(gestureState: PanResponderGestureState): boolean {
  return (
    Math.abs(gestureState.dx) < classSwipeConfig.gestureIsClickThreshold &&
    Math.abs(gestureState.dy) < classSwipeConfig.gestureIsClickThreshold
  );
}

function handleShouldSetPanResponder(evt: GestureResponderEvent, gestureState: PanResponderGestureState): boolean {
  return evt.nativeEvent.touches.length === 1 && !gestureIsClick(gestureState);
}

function triggerSwipeHandlers({
  swipeDirection,
  gestureState,
  onSwipe,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight
}: SwipeHandlerPropsType): void {
  const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = SwipeDirectionsEnumType;
  onSwipe?.(swipeDirection, gestureState);
  switch (swipeDirection) {
    case SWIPE_LEFT:
      onSwipeLeft?.(gestureState);
      break;
    case SWIPE_RIGHT:
      onSwipeRight?.(gestureState);
      break;
    case SWIPE_UP:
      onSwipeUp?.(gestureState);
      break;
    case SWIPE_DOWN:
      onSwipeDown?.(gestureState);
      break;
    default:
  }
}

function isValidHorizontalSwipe(gestureState: PanResponderGestureState): boolean {
  const { vx, dy } = gestureState;
  const { velocityThreshold, directionalOffsetThreshold } = classSwipeConfig;
  return isValidSwipe(vx, velocityThreshold, dy, directionalOffsetThreshold);
}

function isValidVerticalSwipe(gestureState: PanResponderGestureState): boolean {
  const { vy, dx } = gestureState;
  const { velocityThreshold, directionalOffsetThreshold } = classSwipeConfig;
  return isValidSwipe(vy, velocityThreshold, dx, directionalOffsetThreshold);
}

function getSwipeDirection(gestureState: PanResponderGestureState): SwipeDirectionsEnumType | null {
  const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP, SWIPE_DOWN } = SwipeDirectionsEnumType;
  const { dx, dy } = gestureState;
  if (isValidVerticalSwipe(gestureState)) {
    return dy > 0 ? SWIPE_DOWN : SWIPE_UP;
  }
  if (isValidHorizontalSwipe(gestureState)) {
    return dx > 0 ? SWIPE_RIGHT : SWIPE_LEFT;
  }
  return null;
}

function handlePanResponderEnd({
  gestureState,
  onSwipe,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight
}: SwipeHandlerPropsType): void {
  const swipeDirection: SwipeDirectionsEnumType | null = getSwipeDirection(gestureState);
  triggerSwipeHandlers({
    swipeDirection,
    gestureState,
    onSwipe,
    onSwipeUp,
    onSwipeDown,
    onSwipeLeft,
    onSwipeRight
  });
}

function useGestureRecognizer({
  config,
  onSwipe,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight
}: GestureRecognizerPropsType) {
  const [gestureData, setGestureData] =
    useState<{
      evt: GestureResponderEvent;
      gestureState: PanResponderGestureState;
    } | null>(null);

  const prevConfig = usePrevious(config);

  const shouldSetResponder = useCallback((evt, gestureState) => {
    return handleShouldSetPanResponder(evt, gestureState);
  }, []);

  const responderEnd = useCallback((evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    setGestureData({ evt, gestureState });
  }, []);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: shouldSetResponder,
        onMoveShouldSetPanResponder: shouldSetResponder,
        onPanResponderRelease: responderEnd,
        onPanResponderTerminate: responderEnd
      }),
    [shouldSetResponder, responderEnd]
  );

  useEffect(() => {
    if (gestureData) {
      const { gestureState } = gestureData;
      handlePanResponderEnd({ gestureState, onSwipe, onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight });
      setGestureData(null);
    }
  }, [gestureData, onSwipe, onSwipeDown, onSwipeLeft, onSwipeRight, onSwipeUp]);

  useEffect(() => {
    if (config !== prevConfig) {
      classSwipeConfig = Object.assign(swipeConfig, config);
    }
  }, [config, prevConfig]);

  useEffect(() => {
    classSwipeConfig = Object.assign(swipeConfig, config);
  }, [config]);

  return { panResponder };
}

export { useGestureRecognizer };
