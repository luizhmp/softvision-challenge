import { useMemo, useCallback } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Types
import { RootState } from '~/presentation/redux/store/redux-store';
import { UserCheckoutProducts } from '~/presentation/redux/slices/user-checkout-products/types';

export function useCheckoutProducts() {
  const userCheckoutProducts: UserCheckoutProducts[] = useSelector(
    (state: RootState) => state.userCheckoutProducts.products,
  );

  const calculateTotalOfProductsInCart = useCallback(() => {
    const totalProductsInCart = userCheckoutProducts.reduce((acc, currentProduct) => {
      return acc + currentProduct.userProductQuantity;
    }, 0);

    return totalProductsInCart;
  }, [userCheckoutProducts]);

  const totalProductsInCart = useMemo(() => {
    return calculateTotalOfProductsInCart();
  }, [calculateTotalOfProductsInCart]);

  const calculateTotalValueInCart = useCallback(() => {
    const totalValueInCart = userCheckoutProducts.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.userProductQuantity;
    }, 0);

    return totalValueInCart;
  }, [userCheckoutProducts]);

  const totalValueInCart = useMemo(() => {
    return calculateTotalValueInCart();
  }, [calculateTotalValueInCart]);

  return { totalProductsInCart, totalValueInCart, userCheckoutProducts };
}
