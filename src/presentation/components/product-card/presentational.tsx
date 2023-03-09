import React, { useState, useEffect, useCallback } from 'react';

// Components
import { QuantityButton } from '~/presentation/components/buttons';
import { Heading } from '~/presentation/components/texts';

// Helpers
import { formatNumberIntoCurrency } from '~/presentation/helpers/formatters';

// Hooks
import { useCheckoutProducts } from '~/presentation/hooks';

// Redux
import { useDispatch } from 'react-redux';
import {
  addUserCheckoutProduct,
  decreaseUserCheckoutProductQuantity,
  increaseUserCheckoutProductQuantity,
} from '~/presentation/redux/slices/user-checkout-products';

// Styles
import {
  ProductContainer,
  StyledButton,
  StyledImage,
  TitleAndPriceContainer,
  TitleWrapper,
  WhiteHeading,
} from './styles';

// Types
import { ProductCardPresentationalInterface } from './types';

export function ProductCard({ product }: ProductCardPresentationalInterface) {
  const [userProductQuantityInCart, setUserProductQuantityInCart] = useState<number>(0);
  const { userCheckoutProducts } = useCheckoutProducts();

  const dispatch = useDispatch();
  const { id, image, description, price, title } = product;
  const formattedPrice = formatNumberIntoCurrency(price);

  function onPressAddButton() {
    return dispatch(addUserCheckoutProduct(product));
  }

  function onPressIncrease() {
    return dispatch(increaseUserCheckoutProductQuantity(id));
  }

  function onPressDecrease() {
    return dispatch(decreaseUserCheckoutProductQuantity(id));
  }

  const checkUserProductQuantityInCart = useCallback(() => {
    const userCheckoutProductFound = userCheckoutProducts.find(
      (userProductInCart) => userProductInCart.id === id,
    );

    if (userCheckoutProductFound) {
      setUserProductQuantityInCart(userCheckoutProductFound.userProductQuantity);
    } else {
      setUserProductQuantityInCart(0);
    }
  }, [id, userCheckoutProducts]);

  useEffect(() => {
    checkUserProductQuantityInCart();
  }, [checkUserProductQuantityInCart]);

  function renderQuantityButton() {
    const isQuantityMoreThanOne = userProductQuantityInCart >= 1;
    if (isQuantityMoreThanOne) {
      return (
        <QuantityButton
          productQuantity={userProductQuantityInCart}
          onPressIncrease={onPressIncrease}
          onPressDecrease={onPressDecrease}
        />
      );
    }

    return (
      <StyledButton onPress={onPressAddButton}>
        <WhiteHeading type="H2">ADD</WhiteHeading>
      </StyledButton>
    );
  }

  return (
    <ProductContainer>
      <StyledImage source={{ uri: image }} resizeMode="contain" alt={description} />
      <TitleAndPriceContainer>
        <TitleWrapper title={title}>
          <Heading type="H1">{title}</Heading>
        </TitleWrapper>
        <Heading type="H2">{formattedPrice}</Heading>
      </TitleAndPriceContainer>
      {renderQuantityButton()}
    </ProductContainer>
  );
}
