import { useState, useEffect, useCallback } from 'react';

// Redux
import { useSelector } from 'react-redux';

// Types
import { RootState } from '~/presentation/redux/store/redux-store';
import { UserCheckoutProducts } from '~/presentation/redux/slices/user-checkout-products/types';

export function useCheckoutProducts() {
  const userCheckoutProducts: UserCheckoutProducts[] = useSelector(
    (state: RootState) => state.userCheckoutProducts.products,
  );
  const [totalProductsInCart, setTotalProductsInCart] = useState<number>(0);
  const [totalValueInCart, setTotalValueInCart] = useState<number>(0);

  const calculateTotalOfProductsInCart = useCallback(() => {
    const totalProductsInCart = userCheckoutProducts.reduce((acc, currentProduct) => {
      return acc + currentProduct.userProductQuantity;
    }, 0);

    setTotalProductsInCart(totalProductsInCart);
  }, [userCheckoutProducts]);

  useEffect(() => {
    calculateTotalOfProductsInCart();
  }, [calculateTotalOfProductsInCart]);

  const calculateTotalValueInCart = useCallback(() => {
    const totalValueInCart = userCheckoutProducts.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.userProductQuantity;
    }, 0);

    setTotalValueInCart(totalValueInCart);
  }, [userCheckoutProducts]);

  useEffect(() => {
    calculateTotalValueInCart();
  }, [calculateTotalValueInCart]);

  return { totalProductsInCart, totalValueInCart, userCheckoutProducts };
}
