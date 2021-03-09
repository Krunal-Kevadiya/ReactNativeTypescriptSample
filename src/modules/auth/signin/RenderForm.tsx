import { FormInput } from '@components';
import { getConstColors, SignInStrings } from '@constants';
import { SignInModel } from '@models';
import { ThemeSelectors } from '@reduxs';
import { FormikProps } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import { useSelector } from 'react-redux';
import { isRemainingToFillForm } from './SignInScreenUtil';
import styles from './styles/RenderFormStyles';

export function RenderForm(props: FormikProps<SignInModel>): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const { handleSubmit } = props;

  return (
    <View style={styles.form}>
      <FormInput
        isLowerCase
        autoFocus
        id="emailOrPhone"
        returnKeyType="done"
        placeholder={SignInStrings.inputEmail}
        placeholderTextColor={colors.gray}
        keyboardType="email-address"
        selectionColor={colors.secondary}
        style={[styles.textInput, { color: colors.invertedWhite }]}
        divider={getConstColors(colors.gray, '100')}
        errorColor={colors.error}
        {...props}
        onSubmitEditing={handleSubmit}
      />
      <SpinnerButton
        buttonContainer={[styles.buttonContainer, styles.buttonMargin]}
        buttonStyle={styles.spinnerButton}
        gradientType="linear"
        gradientColorAngle={90}
        gradientRadialRadius={10}
        gradientButtonHeight={50}
        gradientColoroffset={['0%', '100%']}
        disabled={isRemainingToFillForm(props)}
        gradientColors={[getConstColors(colors.secondary, '900'), getConstColors(colors.secondary, '100')]}
        disableGradientColors={[getConstColors(colors.gray, '900'), getConstColors(colors.gray, '100')]}
        onPress={handleSubmit}>
        <Text style={[styles.textLabel, { color: colors.primary }]}>{SignInStrings.btnContinue}</Text>
      </SpinnerButton>
    </View>
  );
}
