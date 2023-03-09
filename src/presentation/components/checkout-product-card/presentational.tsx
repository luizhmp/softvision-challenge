import React, { useState, useEffect, useCallback } from 'react';

// Components
import { QuantityButton } from '~/presentation/components/buttons';
import { RemoveItemIcon } from '~/presentation/components/icons';
import { Heading } from '~/presentation/components/texts';

// Helpers
import { formatNumberIntoCurrency } from '~/presentation/helpers';

// Hooks
import { useCheckoutProducts } from '~/presentation/hooks';

// Redux
import { useDispatch } from 'react-redux';
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

export function CheckoutProductCard({ product }: CheckoutProductCardPresentationalInterface) {
  const [totalPriceOfProduct, setTotalPriceOfProduct] = useState<number>(product.price);
  const { userCheckoutProducts } = useCheckoutProducts();

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
