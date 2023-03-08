import React, { useContext, useEffect, useState, useCallback } from 'react';

// Components
import { FlatList } from 'react-native';
import { CheckoutProductCard, ListFooter } from '~/presentation/components';
import { Heading } from '~/presentation/components/texts';

// Redux
import { useSelector } from 'react-redux';

// Styles
import { CheckoutProductCardContainer } from './styles';
import { ThemeContext } from 'styled-components';

// Types
import { RootState } from '~/presentation/redux/store/redux-store';
import { UserCheckoutProducts } from '~/presentation/redux/slices/user-checkout-products/types';

export function CartScreen() {
  const [totalProductsInCart, setTotalProductsInCart] = useState<number>(0);
  const userCheckoutProducts: UserCheckoutProducts[] = useSelector(
    (state: RootState) => state.userCheckoutProducts.products,
  );
  const { metrics } = useContext(ThemeContext);

  const calculateTotalOfProductsInCart = useCallback(() => {
    const totalProductsInCart = userCheckoutProducts.reduce((acc, currentProduct) => {
      return acc + currentProduct.userProductQuantity;
    }, 0);
    setTotalProductsInCart(totalProductsInCart);
  }, [userCheckoutProducts]);

  useEffect(() => {
    calculateTotalOfProductsInCart();
  }, [calculateTotalOfProductsInCart]);

  function renderItem(product: UserCheckoutProducts) {
    return (
      <CheckoutProductCardContainer>
        <CheckoutProductCard product={product} />
      </CheckoutProductCardContainer>
    );
  }

  function renderFooter() {
    return <ListFooter />;
  }

  function renderHeader() {
    const isEmpty = totalProductsInCart === 0;
    if (isEmpty) {
      return null;
    }
    const productText = totalProductsInCart === 1 ? 'produto adicionado' : 'produtos adicionados';

    return <Heading type="H1">{`${totalProductsInCart} ${productText}`}</Heading>;
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={userCheckoutProducts}
      contentContainerStyle={{
        paddingTop: metrics.headerSpace,
        paddingHorizontal: metrics.screenHorizontalPadding,
        paddingVertical: metrics.space,
      }}
      renderItem={({ item }) => renderItem(item)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
    />
  );
}
