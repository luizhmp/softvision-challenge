import { ProductModel } from '~/domain/models';

export interface GetProducts {
  execute(): Promise<ProductModel[]>;
}
