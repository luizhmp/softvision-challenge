import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '~/presentation/navigation/routes';

// Screens
import { CartScreen, HomeScreen } from '~/presentation/screens';

// Components
import { CartIcon } from '~/presentation/components';

// Types
import { RootStackParamList } from './types';

export function AppNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerRight: () => <CartIcon /> }}>
        <Stack.Screen
          name={routes.HomeScreen}
          component={HomeScreen}
          options={{ title: 'Produtos' }}
        />
        <Stack.Screen
          name={routes.CartScreen}
          component={CartScreen}
          options={{ title: 'Carrinho' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
