import { FontEnumType, Header } from '@components';
import { useRoute } from '@react-navigation/native';
import { ThemeSelectors } from '@reduxs';
import { Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';
import { navigateToggleDrawer } from '@navigations';
import styles from './BrowserStyles';
import type { BrowserRoutePropsType } from './Types';
import { getScreenTitle } from './BrowserScreenUtil';

export function BrowserScreen(): React.ReactElement {
  const route = useRoute<BrowserRoutePropsType>();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const { colors } = useSelector(ThemeSelectors.getTheme);

  useEffect(() => {
    setUrl(route.params?.url || '');
  }, [route.params]);

  return (
    <View style={[styles.screen, { backgroundColor: colors.invertedBlack }]}>
      <Header
        typeLeft={FontEnumType.materialIcons}
        nameLeft="menu"
        labelCenter={getScreenTitle(url)}
        onPressLeft={() => navigateToggleDrawer()}
      />
      <View style={styles.container}>
        <WebView source={{ uri: url }} style={styles.webview} onLoadEnd={() => setLoading(false)} />
        {loading && (
          <View style={[styles.spinner, { backgroundColor: colors.invertedBlack }]}>
            <Spinner size="large" color={colors.secondary} />
          </View>
        )}
      </View>
    </View>
  );
}
