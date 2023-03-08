import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { routes } from '~/presentation/navigation';
import { StackNavigation } from '~/presentation/navigation/types';

export function CartIcon() {
  const navigation = useNavigation<StackNavigation>();

  function goToCartScreen() {
    navigation.navigate(routes.CartScreen);
  }

  const { colors } = useContext(ThemeContext);

  return (
    <AntDesign.Button
      name="shoppingcart"
      size={24}
      color="black"
      backgroundColor={colors.white}
      onPress={goToCartScreen}
    />
  );
}
