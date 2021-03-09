import React, { useCallback, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import Animated, { interpolateColors, spring } from 'react-native-reanimated';
import styles from './CustomSwitchStyle';
import type { CustomSwitchPropsType } from './Types';

export function CustomSwitch({
  handleOnPress,
  activeTrackColor,
  inActiveTrackColor,
  activeThumbColor,
  inActiveThumbColor,
  value
}: CustomSwitchPropsType): React.ReactElement {
  const [switchTranslate] = useState(new Animated.Value(0));

  useEffect(() => {
    if (value) {
      spring(switchTranslate, {
        toValue: 21,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001
      }).start();
    } else {
      spring(switchTranslate, {
        toValue: 0,
        mass: 1,
        damping: 15,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001
      }).start();
    }
  }, [value, switchTranslate]);

  const animatedTrackStyles: object = {
    backgroundColor: interpolateColors(switchTranslate, {
      inputRange: [0, 22],
      outputColorRange: [inActiveTrackColor, activeTrackColor]
    })
  };

  const animatedThumbStyles: object = {
    transform: [{ translateX: switchTranslate }],
    backgroundColor: interpolateColors(switchTranslate, {
      inputRange: [0, 22],
      outputColorRange: [inActiveThumbColor, activeThumbColor]
    })
  };

  const memoizedOnSwitchPressCallback = useCallback(() => {
    handleOnPress(!value);
  }, [handleOnPress, value]);

  return (
    <Pressable onPress={memoizedOnSwitchPressCallback}>
      <Animated.View style={[styles.containerStyle, animatedTrackStyles]}>
        <Animated.View style={[styles.circleStyle, animatedThumbStyles, styles.shadowValue]} />
      </Animated.View>
    </Pressable>
  );
}
