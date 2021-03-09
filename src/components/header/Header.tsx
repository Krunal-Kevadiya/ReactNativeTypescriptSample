import { ThemeSelectors } from '@reduxs';
import { Header as BaseHeader } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles/HeaderStyles';
import { Search } from './Search';
import type { HeaderPropsType } from './Types';
import { BothSide } from './BothSide';
import { CenterSide } from './CenterSide';

export function Header({
  typeLeft,
  nameLeft,
  labelLeft,
  onPressLeft,
  viewStyleLeft,
  textStyleLeft,
  imageStyleLeft,

  typeCenter,
  nameCenter,
  labelCenter,
  onPressCenter,
  viewStyleCenter,
  textStyleCenter,
  imageStyleCenter,

  typeRight,
  nameRight,
  labelRight,
  onPressRight,
  viewStyleRight,
  textStyleRight,
  imageStyleRight,

  isLowerCase,
  isSearch,
  ...inputProps
}: HeaderPropsType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  return (
    <BaseHeader style={{ backgroundColor: colors.primary }} iosBarStyle={colors.barStyle}>
      {!isSearch && (
        <View style={styles.container}>
          <CenterSide
            type={typeCenter}
            name={nameCenter}
            label={labelCenter}
            viewStyle={viewStyleCenter}
            textStyle={textStyleCenter}
            imageStyle={imageStyleCenter}
            colors={colors}
            onPress={onPressCenter}
          />
          <BothSide
            type={typeLeft}
            name={nameLeft}
            label={labelLeft}
            viewStyle={viewStyleLeft}
            textStyle={textStyleLeft}
            imageStyle={imageStyleLeft}
            colors={colors}
            onPress={onPressLeft}
          />
          <BothSide
            type={typeRight}
            name={nameRight}
            label={labelRight}
            viewStyle={viewStyleRight}
            textStyle={textStyleRight}
            imageStyle={imageStyleRight}
            colors={colors}
            onPress={onPressRight}
          />
        </View>
      )}
      {isSearch && <Search colors={colors} isLowerCase={isLowerCase} {...inputProps} />}
    </BaseHeader>
  );
}
