import { SignInStrings } from '@constants';
import { SignInModel, SignUpModel } from '@models';
import { AppRoute, navigateWithReplace } from '@navigations';
import { useRoute } from '@react-navigation/native';
import { ThemeSelectors } from '@reduxs';
import { SignInSchema } from '@schemas';
import { Formik, FormikProps } from 'formik';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SpinnerButton from 'react-native-spinner-button';
import { useSelector } from 'react-redux';
import { RenderForm } from './RenderForm';
import styles from './styles/SignInStyles';
import type { SignInRoutePropsType } from './Types';

export function SignInScreen(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const ref = useRef<FormikProps<SignInModel>>(null);
  const route = useRoute<SignInRoutePropsType>();

  function onFormSubmit(values: SignInModel): void {
    navigateWithReplace(AppRoute.VERIFY, SignUpModel.empty(values.emailOrPhone));
  }

  function navigateSignUp(): void {
    navigateWithReplace(AppRoute.SIGN_UP, ref.current?.values);
  }

  return (
    <View style={[styles.screen, { backgroundColor: colors.secondary }]}>
      <View style={styles.header}>
        <Text style={[styles.textHeader, { color: colors.primary }]}>{SignInStrings.title}</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.invertedBlack }]}>
        <Formik
          validateOnMount
          innerRef={ref}
          initialValues={SignInModel.empty(route.params?.emailOrPhone || '')}
          validationSchema={SignInSchema}
          onSubmit={onFormSubmit}>
          {(props: FormikProps<SignInModel>) => <RenderForm {...props} />}
        </Formik>
        <Text style={[styles.textNotYacYet, { color: colors.invertedWhite }]}>{SignInStrings.notYacYet}</Text>
        <SpinnerButton
          buttonContainer={[styles.buttonContainer, styles.buttonMargin]}
          buttonStyle={[styles.spinnerButton, { backgroundColor: colors.invertedBlack }]}
          borderStyle={[styles.buttonBorderStyle, { borderColor: colors.secondary }]}
          onPress={navigateSignUp}>
          <Text style={[styles.textLabel, { color: colors.secondary }]}>{SignInStrings.btnSignUp}</Text>
        </SpinnerButton>
      </Animatable.View>
    </View>
  );
}
