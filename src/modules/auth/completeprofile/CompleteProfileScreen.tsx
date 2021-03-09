import { ActionSheet, ActionSheetHandleType } from '@components';
import { CompleteProfileStrings } from '@constants';
import { useImageSelection } from '@hooks';
import { CompleteProfileModel } from '@models';
import { AppRoute, navigateWithReset } from '@navigations';
import { useRoute } from '@react-navigation/native';
import { ThemeSelectors } from '@reduxs';
import { CompleteProfileSchema } from '@schemas';
import { Formik, FormikProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { RenderForm } from './RenderForm';
import { RenderItem } from './RenderItem';
import styles from './styles/CompleteProfileStyles';
import type { CompleteProfileRoutePropsType } from './Types';

export const actionSheetRef = React.createRef<ActionSheetHandleType>();

export function CompleteProfileScreen(): React.ReactElement {
  const [errorMsg /* , setErrorMsg */] = useState(undefined);
  const [isResultStatus /* , setResultStatus */] = useState(undefined);
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const route = useRoute<CompleteProfileRoutePropsType>();
  const [source, handleTakePhoto, handleChooseLibrary] = useImageSelection(false);
  let tempProps: FormikProps<CompleteProfileModel> | null = null;

  function onFormSubmit(/* values: CompleteProfileModel */): void {
    navigateWithReset(AppRoute.HOME, AppRoute.DASH_BOARD);
  }

  useEffect(() => {
    if (source) {
      tempProps?.setFieldValue('source', source.source);
      tempProps?.setFieldValue('fileName', source.fileName);
      tempProps?.setFieldValue('data', source.data);
    }
  }, [source]);

  return (
    <View style={[styles.screen, { backgroundColor: colors.secondary }]}>
      <View style={styles.header}>
        <Text style={[styles.textHeader, { color: colors.primary }]}>{CompleteProfileStrings.title}</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.invertedBlack }]}>
        <Formik
          validateOnMount
          initialValues={CompleteProfileModel.empty(
            route.params.username,
            route.params.source,
            route.params.fileName,
            route.params.data
          )}
          validationSchema={CompleteProfileSchema}
          onSubmit={onFormSubmit}>
          {(props: FormikProps<CompleteProfileModel>) => {
            tempProps = props;
            return <RenderForm {...props} errorMsg={errorMsg} isResultStatus={isResultStatus} />;
          }}
        </Formik>
      </Animatable.View>
      <ActionSheet
        ref={actionSheetRef}
        title={CompleteProfileStrings.textSelectAPhoto}
        list={CompleteProfileStrings.listSelectAPhoto}
        renderItem={({ item }) => (
          <RenderItem item={item} handleTakePhoto={handleTakePhoto} handleChooseLibrary={handleChooseLibrary} />
        )}
        extraFlatListProps={{
          keyExtractor: (item: any) => item
        }}
      />
    </View>
  );
}
