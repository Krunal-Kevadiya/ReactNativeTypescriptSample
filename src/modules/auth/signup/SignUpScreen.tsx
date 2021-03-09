import { SignUPStrings } from '@constants';
import { SignUpModel } from '@models';
import { AppRoute, navigateWithReplace } from '@navigations';
import { useRoute } from '@react-navigation/native';
import { ThemeSelectors } from '@reduxs';
import { SignUpSchema } from '@schemas';
import { Formik, FormikProps } from 'formik';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SpinnerButton from 'react-native-spinner-button';
import { useSelector } from 'react-redux';
import styles from './styles/SignUpStyles';
import type { SignUpRoutePropsType } from './Types';
import { RenderForm } from './RenderForm';

export function SignUpScreen(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const route = useRoute<SignUpRoutePropsType>();
  const ref = useRef<FormikProps<SignUpModel>>(null);

  function onFormSubmit(values: SignUpModel): void {
    navigateWithReplace(AppRoute.VERIFY, values);
  }

  function navigateSignIn(): void {
    navigateWithReplace(AppRoute.SIGN_IN, ref.current?.values);
  }

  return (
    <View style={[styles.screen, { backgroundColor: colors.secondary }]}>
      <View style={styles.header}>
        <Text style={[styles.textHeader, { color: colors.primary }]}>{SignUPStrings.title}</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.invertedBlack }]}>
        <Formik
          validateOnMount
          innerRef={ref}
          initialValues={SignUpModel.empty(route.params?.emailOrPhone || '')}
          validationSchema={SignUpSchema}
          onSubmit={onFormSubmit}>
          {(props: FormikProps<SignUpModel>) => <RenderForm {...props} />}
        </Formik>
        <Text style={[styles.textAlreadyAccount, { color: colors.invertedWhite }]}>{SignUPStrings.alreadyAccount}</Text>
        <SpinnerButton
          buttonContainer={[styles.buttonContainer, styles.buttonMargin]}
          buttonStyle={[styles.spinnerButton, { backgroundColor: colors.invertedBlack }]}
          borderStyle={[styles.buttonBorderStyle, { borderColor: colors.secondary }]}
          onPress={navigateSignIn}>
          <Text style={[styles.textLabel, { color: colors.secondary }]}>{SignUPStrings.btnSignIn}</Text>
        </SpinnerButton>
      </Animatable.View>
    </View>
  );
}
