import { getConstColors, VerifyStrings } from '@constants';
import { VerifyModel } from '@models';
import { useRoute } from '@react-navigation/native';
import { ThemeSelectors } from '@reduxs';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { FormikProps } from 'formik';
import { Spinner } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import { useSelector } from 'react-redux';
import { isRemainingToFillForm } from './VerifyScreenUtil';
import styles from './styles/RenderFormStyles';
import type { VerifyRoutePropsType } from './Types';

export function RenderForm(props: FormikProps<VerifyModel>): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const route = useRoute<VerifyRoutePropsType>();
  const { values, handleChange, handleSubmit } = props;

  return (
    <View style={styles.form}>
      <Text style={[styles.textVerifyDesc, { color: colors.invertedWhite }]}>
        {VerifyStrings.desc.format(route.params?.emailOrPhone || '')}
      </Text>
      <OTPInputView
        editable
        autoFocusOnLoad
        style={styles.textInput}
        pinCount={6}
        code={values.otp}
        returnKeyType="done"
        selectionColor={colors.secondary}
        codeInputFieldStyle={[
          styles.underlineStyleBase,
          { borderBottomColor: colors.gray, color: colors.invertedWhite }
        ]}
        codeInputHighlightStyle={{ borderColor: colors.secondary }}
        onCodeChanged={handleChange('otp')}
        onCodeFilled={() => props.handleSubmit()}
      />
      <Text style={[styles.textRetry, { color: colors.invertedWhite }]}>{VerifyStrings.retry}</Text>
      <Spinner style={styles.spinnerRetry} color={colors.secondary} size="small" />
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
        <Text style={[styles.textLabel, { color: colors.primary }]}>{VerifyStrings.btnVerifyCode}</Text>
      </SpinnerButton>
    </View>
  );
}
