import React, { useState, useEffect, useCallback } from 'react';

// Components
import { Heading, QuantityButton } from '~/presentation/components';

// Helpers
import { formatNumberIntoCurrency } from '~/presentation/helpers/formatters';

// Redux
import { useDispatch, useSelector } from 'react-redux';
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
import { RootState } from '~/presentation/redux/store/redux-store';
import { ProductCardPresentationalInterface } from './types';
import { UserCheckoutProducts } from '~/presentation/redux/slices/user-checkout-products/types';

export function ProductCard({ product }: ProductCardPresentationalInterface) {
  const [userProductQuantityInCart, setUserProductQuantityInCart] = useState<number>(0);
  const userCheckoutProducts: UserCheckoutProducts[] = useSelector(
    (state: RootState) => state.userCheckoutProducts.products,
  );
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
