import { FormInput } from '@components';
import { getConstColors, CreateUserNameStrings } from '@constants';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Text, View } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import { useSelector } from 'react-redux';
import { getUserNameStatus, isRemainingToFillForm } from './CreateUserNameScreenUtil';
import styles from './styles/RenderFormStyles';
import type { RenderFormPropsType } from './Types';

export function RenderForm({ errorMsg, isResultStatus, ...props }: RenderFormPropsType): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const { iconName, iconColor } = getUserNameStatus(isResultStatus);

  return (
    <View style={styles.form}>
      <Text style={[styles.textCreateUserNameDesc, { color: colors.invertedWhite }]}>{CreateUserNameStrings.desc}</Text>
      <FormInput
        isLowerCase
        autoFocus
        id="username"
        placeholder={CreateUserNameStrings.inputUserName}
        placeholderTextColor={colors.gray}
        keyboardType="default"
        returnKeyType="done"
        selectionColor={colors.secondary}
        style={[styles.textInput, { color: colors.invertedWhite }]}
        divider={getConstColors(colors.gray, '100')}
        errorColor={colors.error}
        errorMsg={errorMsg}
        rightIconName={iconName}
        rightIconColor={iconColor}
        rightIconSize={24}
        {...props}
        onSubmitEditing={props.handleSubmit}
      />
      <SpinnerButton
        buttonContainer={[styles.buttonContainer, styles.btnNext]}
        buttonStyle={styles.spinnerButton}
        gradientType="linear"
        gradientColorAngle={90}
        gradientRadialRadius={10}
        gradientButtonHeight={50}
        gradientColoroffset={['0%', '100%']}
        disabled={isRemainingToFillForm(props)}
        gradientColors={[getConstColors(colors.secondary, '900'), getConstColors(colors.secondary, '100')]}
        disableGradientColors={[getConstColors(colors.gray, '900'), getConstColors(colors.gray, '100')]}
        onPress={props.handleSubmit}>
        <Text style={[styles.textLabel, { color: colors.primary }]}>{CreateUserNameStrings.btnNext}</Text>
      </SpinnerButton>
    </View>
  );
}
