import { ActionSheet, ActionSheetHandleType } from '@components';
import { CreateProfileStrings } from '@constants';
import { useImageSelection } from '@hooks';
import { CreateProfileModel } from '@models';
import { AppRoute, navigateWithReplace } from '@navigations';
import { ThemeSelectors } from '@reduxs';
import { CreateProfileSchema } from '@schemas';
import { Formik, FormikProps } from 'formik';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { RenderForm } from './RenderForm';
import { RenderItem } from './RenderItem';
import styles from './styles/CreateProfileStyles';

export const actionSheetRef = React.createRef<ActionSheetHandleType>();

export function CreateProfileScreen(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  let tempProps: FormikProps<CreateProfileModel> | null = null;
  const [source, handleTakePhoto, handleChooseLibrary] = useImageSelection(false);

  function onFormSubmit(values: CreateProfileModel): void {
    navigateWithReplace(AppRoute.CREATE_PROFILE_NAME, values);
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
        <Text style={[styles.textHeader, { color: colors.primary }]}>{CreateProfileStrings.title}</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.invertedBlack }]}>
        <Formik
          validateOnMount
          initialValues={CreateProfileModel.empty()}
          validationSchema={CreateProfileSchema}
          onSubmit={onFormSubmit}>
          {(props: FormikProps<CreateProfileModel>) => {
            tempProps = props;
            return <RenderForm {...props} />;
          }}
        </Formik>
      </Animatable.View>
      <ActionSheet
        ref={actionSheetRef}
        title={CreateProfileStrings.textSelectAPhoto}
        list={CreateProfileStrings.listSelectAPhoto}
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
