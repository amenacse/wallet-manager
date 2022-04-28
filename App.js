/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import DrawerScreen from "./app/navigators/drawer/drawer-screen";
import Toast from 'react-native-toast-message'
import { toastConfig } from './app/components/common/notification/toast-config';
import Colors from './app/resources/colors'

const App = () => {

  //Hide Splash screen on app load.
  React.useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <DrawerScreen />
        </NavigationContainer>
      </PaperProvider>
      <Toast
          config={toastConfig}
          topOffset={Platform.OS === "android" ? 0 : undefined}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.secondary
  }
}
export default App;
