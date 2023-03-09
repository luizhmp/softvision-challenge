import { faker } from '@faker-js/faker';
import { ProductModel } from '~/domain/models';

export const mockProductModel = (): ProductModel => ({
  id: faker.datatype.number(),
  title: faker.random.words(),
  price: faker.datatype.number(),
  category: faker.random.words(),
  description: faker.random.words(),
  image: faker.internet.url(),
  rating: {
    count: faker.datatype.number(),
    rate: faker.datatype.number(),
  },
});
