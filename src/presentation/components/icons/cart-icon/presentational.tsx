import React, { useContext, useState, useCallback, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { routes } from '~/presentation/navigation/routes';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Hooks
import { useCheckoutProducts } from '~/presentation/hooks';

// Styles
import { BoldHeading, UserCheckoutProductsTotalQuantityContainer } from './styles';

// Types
import { StackNavigation } from '~/presentation/navigation/navigators/types';

export function CartIcon() {
  const [totalProductsInCart, setTotalProductsInCart] = useState<number>(0);
  const navigation = useNavigation<StackNavigation>();
  const { userCheckoutProducts } = useCheckoutProducts();

  const calculateTotalOfProductsInCart = useCallback(() => {
    const totalProductsInCart = userCheckoutProducts.reduce((acc, currentProduct) => {
      return acc + currentProduct.userProductQuantity;
    }, 0);
    setTotalProductsInCart(totalProductsInCart);
  }, [userCheckoutProducts]);

  useEffect(() => {
    calculateTotalOfProductsInCart();
  }, [calculateTotalOfProductsInCart]);

  function goToCartScreen() {
    navigation.navigate(routes.CartScreen);
  }

  const { colors } = useContext(ThemeContext);

  function renderQuantityIndicator() {
    const hasZeroProducts = totalProductsInCart === 0;

    if (hasZeroProducts) {
      return null;
    }

    return (
      <UserCheckoutProductsTotalQuantityContainer>
        <BoldHeading type="H1">{totalProductsInCart}</BoldHeading>
      </UserCheckoutProductsTotalQuantityContainer>
    );
  }

  return (
    <AntDesign.Button
      name="shoppingcart"
      size={24}
      color={colors.white}
      backgroundColor={colors.primary}
      onPress={goToCartScreen}
    >
      {renderQuantityIndicator()}
    </AntDesign.Button>
  );
}
