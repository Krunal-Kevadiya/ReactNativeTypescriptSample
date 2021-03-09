import { getConstColors } from '@constants';
import { ThemeSelectors } from '@reduxs';
import { generateOpacity, isNotNullOrEmpty } from '@utils';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';
import styles from './ActionSheetStyles';
import { ActionSheetHandleType, ActionSheetPropsType } from './Types';

function CustomSheet(
  {
    title,
    message,
    list,
    renderItem,
    onSwipeComplete,
    onBackButtonPress,
    children,
    extraFlatListProps
  }: ActionSheetPropsType,
  ref: React.Ref<ActionSheetHandleType>
): React.ReactElement | null {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const [isVisible, setVisible] = useState(false);
  const [swipeThresholdHeight, setSwipeThresholdHeight] = useState(0);
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
    }
  }));

  if (!isVisible) return null;
  return (
    <Modal
      propagateSwipe
      scrollHorizontal
      coverScreen={false}
      style={styles.popupView}
      swipeDirection={['down']}
      isVisible={isVisible}
      swipeThreshold={swipeThresholdHeight}
      backdropOpacity={0.7}
      customBackdrop={
        <View style={[styles.customBackdrop, { backgroundColor: generateOpacity(colors.primary, 99) }]} />
      }
      onSwipeComplete={() => {
        StatusBar.setHidden(false, 'slide');
        setVisible(false);
        onSwipeComplete?.();
      }}
      onBackButtonPress={() => {
        StatusBar.setHidden(false, 'slide');
        setVisible(false);
        onBackButtonPress?.();
      }}
      onModalWillShow={() => StatusBar.setHidden(true, 'slide')}
      onModalWillHide={() => StatusBar.setHidden(false, 'slide')}>
      <View style={styles.popupStyle}>
        <View
          style={[styles.popupContainerStyle, { backgroundColor: getConstColors(colors.gray, '900') }]}
          onLayout={(event) => setSwipeThresholdHeight(event.nativeEvent.layout.height * 0.2)}>
          <View style={styles.containerViewStyle}>
            <View style={[styles.popupDismissLine, { backgroundColor: colors.white }]} />
            {isNotNullOrEmpty(title) && (
              <Text style={[styles.titleText, { color: colors.white }]} numberOfLines={1}>
                {title}
              </Text>
            )}
            {isNotNullOrEmpty(message) && (
              <Text style={[styles.messageText, { color: getConstColors(colors.gray, '100') }]}>{message}</Text>
            )}
            {list && <FlatList style={styles.list} data={list} renderItem={renderItem} {...extraFlatListProps} />}
            {children && children}
          </View>
        </View>
      </View>
    </Modal>
  );
}

export const ActionSheet = forwardRef(CustomSheet);
