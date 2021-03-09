import { CreateUserNameStrings } from '@constants';
import { CompleteProfileModel, CreateUserNameModel } from '@models';
import { AppRoute, navigateWithReplace } from '@navigations';
import { useRoute } from '@react-navigation/native';
import { ThemeSelectors } from '@reduxs';
import { CreateUserNameSchema } from '@schemas';
import { Formik, FormikProps } from 'formik';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { RenderForm } from './RenderForm';
import styles from './styles/CreateUserNameStyles';
import type { CreateProfileUserNameRoutePropsType } from './Types';

export function CreateUserNameScreen(): React.ReactElement {
  const [errorMsg /* , setErrorMsg */] = useState(undefined);
  const [isResultStatus /* , setResultStatus */] = useState(undefined);
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const route = useRoute<CreateProfileUserNameRoutePropsType>();

  function onFormSubmit(values: CreateUserNameModel): void {
    const params = CompleteProfileModel.empty(
      values.username,
      route.params.source,
      route.params.fileName,
      route.params.data
    );
    navigateWithReplace(AppRoute.COMPLETE_PROFILE, params);
  }

  return (
    <View style={[styles.screen, { backgroundColor: colors.secondary }]}>
      <View style={styles.header}>
        <Text style={[styles.textHeader, { color: colors.primary }]}>{CreateUserNameStrings.title}</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.invertedBlack }]}>
        <Formik
          validateOnMount
          initialValues={CreateUserNameModel.empty()}
          validationSchema={CreateUserNameSchema}
          onSubmit={onFormSubmit}>
          {(props: FormikProps<CreateUserNameModel>) => (
            <RenderForm {...props} errorMsg={errorMsg} isResultStatus={isResultStatus} />
          )}
        </Formik>
      </Animatable.View>
    </View>
  );
}
