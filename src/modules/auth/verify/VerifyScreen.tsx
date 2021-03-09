import { VerifyStrings } from '@constants';
import { VerifyModel } from '@models';
import { AppRoute, navigateWithReplace, navigateWithReset } from '@navigations';
import { useRoute } from '@react-navigation/native';
import { ThemeSelectors } from '@reduxs';
import { VerifySchema } from '@schemas';
import { isNotNullOrEmpty } from '@utils';
import { Formik, FormikProps } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { RenderForm } from './RenderForm';
import styles from './styles/VerifyStyles';
import type { VerifyRoutePropsType } from './Types';

export function VerifyScreen(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const route = useRoute<VerifyRoutePropsType>();

  function onFormSubmit(values: VerifyModel): void {
    if (isNotNullOrEmpty(route.params?.userName)) {
      navigateWithReplace(AppRoute.CREATE_PROFILE_PICTURE, values);
    } else {
      navigateWithReset(AppRoute.HOME, AppRoute.DASH_BOARD);
    }
  }

  return (
    <View style={[styles.screen, { backgroundColor: colors.secondary }]}>
      <View style={styles.header}>
        <Text style={[styles.textHeader, { color: colors.primary }]}>{VerifyStrings.title}</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.invertedBlack }]}>
        <Formik
          validateOnMount
          initialValues={VerifyModel.empty()}
          validationSchema={VerifySchema}
          onSubmit={onFormSubmit}>
          {(props: FormikProps<VerifyModel>) => <RenderForm {...props} />}
        </Formik>
      </Animatable.View>
    </View>
  );
}
