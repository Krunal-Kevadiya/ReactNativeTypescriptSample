import { ThemeSelectors } from '@reduxs';
import { verticalScale } from '@theme';
import { isNotNullOrEmpty } from '@utils';
import React, { forwardRef } from 'react';
import { Animated, Image, Text, View, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './ErrorAlertStyles';
import { useErrorAlert, wrapperAnimStyle } from './ErrorAlertUtil';
import GestureRecognizer from './gesture/GestureRecognizer';
import type { ErrorAlertHandleType, ErrorAlertPropsType } from './Types';

function CustomAlert(
  { translucent, numberOfLines }: ErrorAlertPropsType,
  ref: React.Ref<ErrorAlertHandleType>
): React.ReactElement | null {
  const defaultTranslucent = translucent || true;
  const defaultNumberOfLines = numberOfLines || 2;
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const { animatedAlert, data, isOpen, minHeight, handlerSwipeUp } = useErrorAlert(defaultTranslucent, ref);
  if (!isOpen) {
    return null;
  }
  const tempHeight: number = minHeight || verticalScale(130);
  const tintStyle = isNotNullOrEmpty(data?.imageTint) ? { tintColor: data?.imageTint } : null;
  const src = typeof data?.image === 'string' ? { uri: data?.image } : data?.image;
  const containerStyle: ViewStyle = {
    height: tempHeight,
    justifyContent: 'flex-end'
  };

  return (
    <Animated.View style={wrapperAnimStyle(animatedAlert, tempHeight)}>
      <View style={containerStyle}>
        <View style={[styles.contentContainerStyle, { backgroundColor: colors.secondary }]}>
          {isNotNullOrEmpty(data?.message) && (
            <Text numberOfLines={defaultNumberOfLines} style={[styles.messageStyle, { color: colors.primary }]}>
              {data?.message}
            </Text>
          )}
          {src && <Image style={[styles.imageStyle, tintStyle]} source={src} />}
        </View>
        <GestureRecognizer style={{ ...styles.absoluteView, ...containerStyle }} onSwipeUp={handlerSwipeUp} />
      </View>
    </Animated.View>
  );
}

export const ErrorAlert = forwardRef(CustomAlert);
