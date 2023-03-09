import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import { UserCheckoutProductsInterface, UpdateUserCheckoutProductsAction } from './types';
import { ProductModel } from '~/domain/models';

const userCheckoutProductsInitialState: UserCheckoutProductsInterface = {
  products: [],
};

export const userCheckoutProductsSlice = createSlice({
  name: UpdateUserCheckoutProductsAction,
  initialState: userCheckoutProductsInitialState,
  reducers: {
    increaseUserCheckoutProductQuantity: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      const updatedProducts = state.products.map((product) => {
        const hasSameId = product.id === payload;

        if (hasSameId) {
          return {
            ...product,
            userProductQuantity: product.userProductQuantity + 1,
          };
        }

        return product;
      });

      state.products = updatedProducts;
    },
    decreaseUserCheckoutProductQuantity: (state, action: PayloadAction<number>) => {
      const payloadProductId = action.payload;
      const updatedProducts = state.products
        .map((product) => {
          const hasSameId = product.id === payloadProductId;
          const canBeDecreased = hasSameId && product.userProductQuantity > 0;

          if (canBeDecreased) {
            return {
              ...product,
              userProductQuantity: product.userProductQuantity - 1,
            };
          } else {
            return product;
          }
        })
        .filter((product) => product.userProductQuantity !== 0);
      state.products = updatedProducts;
    },
    addUserCheckoutProduct: (state, action: PayloadAction<ProductModel>) => {
      const { payload } = action;
      const productsCopy = state.products.slice();
      const existingProductIndex = productsCopy.findIndex((product) => product.id === payload.id);
      const isProductAlreadyInCart = existingProductIndex !== -1;

      if (isProductAlreadyInCart) {
        const existingProduct = productsCopy[existingProductIndex];
        productsCopy[existingProductIndex] = {
          ...existingProduct,
          userProductQuantity: existingProduct.userProductQuantity + 1,
        };
      } else {
        productsCopy.push({ ...payload, userProductQuantity: 1 });
      }

      return { ...state, products: productsCopy };
    },

    removeUserCheckoutProduct: (state, action: PayloadAction<ProductModel>) => {
      const { payload } = action;

      const updatedProducts = state.products.filter((product) => product.id !== payload.id);

      state.products = updatedProducts;
    },
  },
});

export const {
  increaseUserCheckoutProductQuantity,
  decreaseUserCheckoutProductQuantity,
  addUserCheckoutProduct,
  removeUserCheckoutProduct,
} = userCheckoutProductsSlice.actions;

export default userCheckoutProductsSlice.reducer;
