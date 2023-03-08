import React from 'react';
import { registerRootComponent } from 'expo';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import { AppNavigator } from '~/presentation/navigation';

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
