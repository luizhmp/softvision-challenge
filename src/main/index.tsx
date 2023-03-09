import React, { useCallback, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import { AppNavigator } from '~/presentation/navigation/navigators';
import * as SplashScreen from 'expo-splash-screen';

// Redux
import store from '~/presentation/redux/store/redux-store';
import { Provider } from 'react-redux';

// Styles
import { ThemeProvider } from 'styled-components';
import { theme } from '~/presentation/styles';

export default function Main() {
  const [isFontsLoaded] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Medium': Montserrat_500Medium,
    'Montserrat-SemiBold': Montserrat_600SemiBold,
  });

  const showSplashScreen = useCallback(async () => {}, []);

  useEffect(() => {
    async function showSplashScreen() {
      await SplashScreen.preventAutoHideAsync();
    }

    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }

    if (!isFontsLoaded) return void showSplashScreen();

    return void hideSplashScreen();
  }, [isFontsLoaded, showSplashScreen]);

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}

registerRootComponent(Main);
