import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { routes } from '~/presentation/navigation';
import { StackNavigation } from '~/presentation/navigation/types';

export function NavigationCartIcon() {
  const navigation = useNavigation<StackNavigation>();

  function goToCartScreen() {
    navigation.navigate(routes.CartScreen);
  }

  return <AntDesign.Button name="shoppingcart" size={24} color="black" onPress={goToCartScreen} />;
}
