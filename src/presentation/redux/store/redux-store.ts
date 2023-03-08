import { configureStore } from '@reduxjs/toolkit';
import userCheckoutProductsReducer from '~/presentation/redux/slices/user-checkout-products/user-checkout-products-slice';

const store = configureStore({
  reducer: {
    userCheckoutProducts: userCheckoutProductsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
