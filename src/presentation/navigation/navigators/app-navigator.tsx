import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '~/presentation/navigation/routes';
import { ThemeContext } from 'styled-components';

// Components
import { CartIcon } from '~/presentation/components/icons';
import { NavigationHeaderTitle } from '~/presentation/components';

// Screens
import { CartScreen, HomeScreen } from '~/presentation/screens';

// Types
import { RootStackParamList } from './types';

export function AppNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const { colors } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleAlign: 'center',
          headerTintColor: colors.white,
          headerRight: () => <CartIcon />,
        }}
      >
        <Stack.Screen
          name={routes.HomeScreen}
          component={HomeScreen}
          options={{ headerTitle: () => <NavigationHeaderTitle title="Produtos" /> }}
        />
        <Stack.Screen
          name={routes.CartScreen}
          component={CartScreen}
          options={{ headerTitle: () => <NavigationHeaderTitle title="Carrinho" /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
