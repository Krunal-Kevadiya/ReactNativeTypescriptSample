import { Icons } from '@assets';
import { ProfileAvatar } from '@components';
import { getConstColors, CreateProfileStrings } from '@constants';
import { CreateProfileModel } from '@models';
import { ThemeSelectors } from '@reduxs';
import { FormikProps } from 'formik';
import React from 'react';
import { Text, View } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import { useSelector } from 'react-redux';
import { actionSheetRef } from './CreateProfileScreen';
import { isRemainingToFillForm } from './CreateProfileScreenUtil';
import styles from './styles/RenderFormStyles';

export function RenderForm(props: FormikProps<CreateProfileModel>): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);
  const { handleSubmit, values } = props;

  return (
    <View style={styles.form}>
      <Text style={[styles.textCreateProfileDesc, { color: colors.invertedWhite }]}>{CreateProfileStrings.desc}</Text>
      <ProfileAvatar
        style={[styles.profileAvatar, { backgroundColor: colors.invertedWhite }]}
        icon={Icons.isUpload}
        url={values.source}
        imageStyle={styles.imageUpload}
        onPress={() => {
          actionSheetRef?.current?.show();
        }}
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
        onPress={handleSubmit}>
        <Text style={[styles.textLabel, { color: colors.primary }]}>{CreateProfileStrings.btnNext}</Text>
      </SpinnerButton>
      <SpinnerButton
        buttonContainer={[styles.buttonContainer, styles.btnChangePhoto]}
        buttonStyle={styles.spinnerButton}
        gradientType="linear"
        gradientColorAngle={90}
        gradientRadialRadius={10}
        gradientButtonHeight={50}
        gradientColoroffset={['0%', '100%']}
        gradientColors={[getConstColors(colors.gray, '900'), getConstColors(colors.gray, '100')]}
        onPress={() => {
          actionSheetRef?.current?.show();
        }}>
        <Text style={[styles.textLabel, { color: colors.primary }]}>{CreateProfileStrings.btnChangePhoto}</Text>
      </SpinnerButton>
    </View>
  );
}
