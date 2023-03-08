import React, { useContext, useState, useCallback, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { routes } from '~/presentation/navigation/routes';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Redux
import { useSelector } from 'react-redux';

// Styles
import { UserCheckoutProductsTotalQuantityContainer, WhiteHeading } from './styles';

// Types
import { StackNavigation } from '~/presentation/navigation/navigators/types';
import { RootState } from '~/presentation/redux/store/redux-store';
import { UserCheckoutProducts } from '~/presentation/redux/slices/user-checkout-products/types';

export function CartIcon() {
  const [totalProductsInCart, setTotalProductsInCart] = useState<number>(0);
  const navigation = useNavigation<StackNavigation>();
  const userCheckoutProducts: UserCheckoutProducts[] = useSelector(
    (state: RootState) => state.userCheckoutProducts.products,
  );

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
        <WhiteHeading type="H1">{totalProductsInCart}</WhiteHeading>
      </UserCheckoutProductsTotalQuantityContainer>
    );
  }

  return (
    <AntDesign.Button
      name="shoppingcart"
      size={24}
      color={colors.black}
      backgroundColor={colors.primary}
      onPress={goToCartScreen}
    >
      {renderQuantityIndicator()}
    </AntDesign.Button>
  );
}
