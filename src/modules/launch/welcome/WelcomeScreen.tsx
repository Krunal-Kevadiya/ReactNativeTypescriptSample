import { Icons } from '@assets';
import { CustomIcon, FontEnumType } from '@components';
import { getConstColors, WelcomeStrings } from '@constants';
import { AppRoute, navigateWithReset } from '@navigations';
import { ThemeSelectors } from '@reduxs';
import React from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SpinnerButton from 'react-native-spinner-button';
import { useSelector } from 'react-redux';
import styles from './WelcomeStyles';

export function WelcomeScreen(): React.ReactElement {
  const { colors } = useSelector(ThemeSelectors.getTheme);

  function navigateSignIn(): void {
    // navigateWithReset(AppRoute.AUTH, AppRoute.SIGN_IN);
    navigateWithReset(AppRoute.HOME, AppRoute.DASH_BOARD);
  }

  return (
    <View style={[styles.screen, { backgroundColor: getConstColors(colors.gray, '300') }]}>
      <View style={[styles.header, styles.headers]}>
        <Animatable.Image animation="bounceIn" source={Icons.logo} style={styles.logo} resizeMode="contain" />
      </View>
      <Animatable.View
        style={[styles.footer, styles.footers, { backgroundColor: colors.invertedBlack }]}
        animation="fadeInUpBig">
        <Text style={[styles.title, { color: colors.invertedWhite }]}>{WelcomeStrings.title}</Text>
        <Text style={[styles.text, { color: colors.gray }]}>{WelcomeStrings.desc}</Text>
        <View style={styles.button}>
          <SpinnerButton
            buttonStyle={styles.buttonContainer}
            gradientType="linear"
            gradientColorAngle={90}
            gradientRadialRadius={10}
            gradientButtonHeight={50}
            gradientColoroffset={['0%', '100%']}
            gradientColors={[getConstColors(colors.secondary, '900'), getConstColors(colors.secondary, '100')]}
            onPress={navigateSignIn}>
            <View style={styles.containerGetStarted}>
              <Text style={[styles.textGetStarted, { color: colors.primary }]}>{WelcomeStrings.btnGetStarted}</Text>
              <CustomIcon type={FontEnumType.materialIcons} name="navigate-next" color={colors.primary} size={20} />
            </View>
          </SpinnerButton>
        </View>
      </Animatable.View>
    </View>
  );
}
