import { FormInput } from '@components';
import { getConstColors, SignUPStrings } from '@constants';
import { SignUpModel } from '@models';
import { ThemeSelectors } from '@reduxs';
import { FormikProps } from 'formik';
import React, { createRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import { useSelector } from 'react-redux';
import { isRemainingToFillForm } from './SignUpScreenUtil';
import styles from './styles/RenderFormStyles';

const screenRef = {
  emailOrPhoneRef: createRef<TextInput>(),
  userNameRef: createRef<TextInput>()
};

export function RenderForm(props: FormikProps<SignUpModel>): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const { handleSubmit } = props;

  return (
    <View style={styles.form}>
      <Text style={[styles.signUpDesc, { color: colors.invertedWhite }]}>{SignUPStrings.desc}</Text>
      <FormInput
        isLowerCase
        autoFocus
        id="realName"
        placeholder={SignUPStrings.inputName}
        placeholderTextColor={colors.gray}
        keyboardType="default"
        returnKeyType="next"
        selectionColor={colors.secondary}
        style={[styles.textInput, { color: colors.invertedWhite }]}
        divider={getConstColors(colors.gray, '100')}
        errorColor={colors.error}
        {...props}
        onSubmitEditing={() => screenRef.emailOrPhoneRef.current?.focus()}
      />
      <FormInput
        isLowerCase
        ref={screenRef.emailOrPhoneRef}
        id="emailOrPhone"
        placeholder={SignUPStrings.inputEmail}
        placeholderTextColor={colors.gray}
        keyboardType="email-address"
        returnKeyType="next"
        selectionColor={colors.secondary}
        style={[styles.textInput, { color: colors.invertedWhite }]}
        divider={getConstColors(colors.gray, '100')}
        errorColor={colors.error}
        {...props}
        onSubmitEditing={() => screenRef.userNameRef.current?.focus()}
      />
      <FormInput
        isLowerCase
        ref={screenRef.userNameRef}
        id="userName"
        returnKeyType="done"
        placeholder={SignUPStrings.inputUserName}
        placeholderTextColor={colors.gray}
        keyboardType="default"
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
        <Text style={[styles.textLabel, { color: colors.primary }]}>{SignUPStrings.btnContinue}</Text>
      </SpinnerButton>
    </View>
  );
}
