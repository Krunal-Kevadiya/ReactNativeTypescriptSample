import { PanResponderGestureState, ViewStyle } from 'react-native';

export enum SwipeDirectionsEnumType {
  SWIPE_UP,
  SWIPE_DOWN,
  SWIPE_LEFT,
  SWIPE_RIGHT
}

export type ConfigPropsType = {
  velocityThreshold: number;
  directionalOffsetThreshold: number;
  gestureIsClickThreshold: number;
};

export type GestureRecognizerPropsType = {
  config?: ConfigPropsType;
  style?: ViewStyle;
  onSwipe?: (
    swipeDirection: SwipeDirectionsEnumType | null | undefined,
    gestureState: PanResponderGestureState
  ) => void;
  onSwipeUp?: (gestureState: PanResponderGestureState) => void;
  onSwipeDown?: (gestureState: PanResponderGestureState) => void;
  onSwipeLeft?: (gestureState: PanResponderGestureState) => void;
  onSwipeRight?: (gestureState: PanResponderGestureState) => void;
};

export type SwipeHandlerPropsType = {
  swipeDirection?: SwipeDirectionsEnumType | null;
  gestureState: PanResponderGestureState;
  onSwipe?: (
    swipeDirection: SwipeDirectionsEnumType | null | undefined,
    gestureState: PanResponderGestureState
  ) => void;
  onSwipeUp?: (gestureState: PanResponderGestureState) => void;
  onSwipeDown?: (gestureState: PanResponderGestureState) => void;
  onSwipeLeft?: (gestureState: PanResponderGestureState) => void;
  onSwipeRight?: (gestureState: PanResponderGestureState) => void;
};
