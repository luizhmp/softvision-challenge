import { RemoteGetProducts } from '~/data/usecases/get-products';
import { AxiosHttpClient } from '~/infra';

export const makeRemoteGetProducts = () => {
  const baseUrl = 'https://fakestoreapi.com';
  const url = `${baseUrl}/products`;
  const axiosHttpClient = new AxiosHttpClient();
  return new RemoteGetProducts(url, axiosHttpClient);
};
