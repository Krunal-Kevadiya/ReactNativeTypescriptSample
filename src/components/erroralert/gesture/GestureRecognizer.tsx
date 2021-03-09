import React from 'react';
import { View } from 'react-native';
import { useGestureRecognizer } from './GestureRecognizerUtil';
import type { GestureRecognizerPropsType } from './Types';

function GestureRecognizer({
  config,
  onSwipe,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight,
  ...viewProps
}: GestureRecognizerPropsType) {
  const { panResponder } = useGestureRecognizer({ config, onSwipe, onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight });

  return <View {...viewProps} {...panResponder.panHandlers} />;
}

export default GestureRecognizer;
