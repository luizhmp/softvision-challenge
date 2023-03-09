import React, { useContext } from 'react';

// Components
import { FlatList } from 'react-native';
import { CheckoutProductCard, EmptyShoppingCart, ListFooter } from '~/presentation/components';
import { Heading } from '~/presentation/components/texts';

// Hooks
import { useCheckoutProducts } from '~/presentation/hooks';

// Styles
import { CheckoutProductCardContainer } from './styles';
import { ThemeContext } from 'styled-components';

// Types
import { UserCheckoutProducts } from '~/presentation/redux/slices/user-checkout-products/types';

export function CartScreen() {
  const { totalProductsInCart, userCheckoutProducts } = useCheckoutProducts();
  const { metrics } = useContext(ThemeContext);

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

  function renderEmptyComponent() {
    return <EmptyShoppingCart />;
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
      ListEmptyComponent={renderEmptyComponent}
    />
  );
}
