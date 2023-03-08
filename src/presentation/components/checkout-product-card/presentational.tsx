import React, { useState, useEffect, useCallback } from 'react';

// Components
import { Heading, QuantityButton, RemoveItemIcon } from '~/presentation/components';

// Helpers
import { formatNumberIntoCurrency } from '~/presentation/helpers';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseUserCheckoutProductQuantity,
  increaseUserCheckoutProductQuantity,
  removeUserCheckoutProduct,
} from '~/presentation/redux/slices/user-checkout-products';

// Styles
import {
  CheckoutProductCardContainer,
  PriceAndIconContainer,
  ProductBottomContainer,
  ProductContentContainer,
  StyledImage,
} from './styles';

// Types
import { CheckoutProductCardPresentationalInterface } from './types';
import { RootState } from '~/presentation/redux/store/redux-store';
import { UserCheckoutProducts } from '~/presentation/redux/slices/user-checkout-products/types';

export function CheckoutProductCard({ product }: CheckoutProductCardPresentationalInterface) {
  const [totalPriceOfProduct, setTotalPriceOfProduct] = useState<number>(product.price);
  const userCheckoutProducts: UserCheckoutProducts[] = useSelector(
    (state: RootState) => state.userCheckoutProducts.products,
  );
  const { id, image, description, title, userProductQuantity } = product;
  const formattedPrice = formatNumberIntoCurrency(totalPriceOfProduct);
  const dispatch = useDispatch();

  const calculateTotalPriceOfProduct = useCallback(() => {
    const totalPriceOfProduct = userCheckoutProducts.reduce((acc, currentProduct) => {
      const hasSameId = currentProduct.id === id;

      if (hasSameId) {
        const totalPrice = currentProduct.price * currentProduct.userProductQuantity;

        return acc + totalPrice;
      }
      return acc;
    }, 0);

    setTotalPriceOfProduct(totalPriceOfProduct);
  }, [id, userCheckoutProducts]);

  useEffect(() => {
    calculateTotalPriceOfProduct();
  }, [calculateTotalPriceOfProduct]);

  function onPressRemoveIcon() {
    return dispatch(removeUserCheckoutProduct(product));
  }

  function onPressIncrease() {
    return dispatch(increaseUserCheckoutProductQuantity(id));
  }

  function onPressDecrease() {
    const hasOnlyOneItem = userProductQuantity <= 1;
    if (hasOnlyOneItem) return dispatch(removeUserCheckoutProduct(product));

    return dispatch(decreaseUserCheckoutProductQuantity(id));
  }

  const hasZeroProducts = userProductQuantity === 0;

  if (hasZeroProducts) {
    return null;
  }

  return (
    <CheckoutProductCardContainer>
      <StyledImage source={{ uri: image }} resizeMode="contain" alt={description} />

      <ProductContentContainer>
        <Heading type="H1">{title}</Heading>

        <ProductBottomContainer>
          <PriceAndIconContainer>
            <Heading type="H2">{formattedPrice}</Heading>
            <RemoveItemIcon onPressIcon={onPressRemoveIcon} />
          </PriceAndIconContainer>

          <QuantityButton
            productQuantity={userProductQuantity}
            onPressIncrease={onPressIncrease}
            onPressDecrease={onPressDecrease}
          />
        </ProductBottomContainer>
      </ProductContentContainer>
    </CheckoutProductCardContainer>
  );
}
