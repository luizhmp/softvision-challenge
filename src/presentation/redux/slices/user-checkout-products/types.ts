import { ProductModel } from '~/domain/models';

export interface UserCheckoutProducts extends ProductModel {
  userProductQuantity: number;
}

export interface UserCheckoutProductsInterface {
  products: UserCheckoutProducts[];
}

export const UpdateUserCheckoutProductsAction = 'User_Checkout_Products';
