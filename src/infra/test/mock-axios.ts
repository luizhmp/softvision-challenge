import axios from 'axios';
import { faker } from '@faker-js/faker';
import { mockProductModel } from '~/domain';

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const mockedProductModel = mockProductModel();
  const mockedAxiosResult = {
    data: {
      mockedProductModel,
    },
    status: faker.random.numeric(),
  };

  mockedAxios.get.mockResolvedValue(mockedAxiosResult);

  return mockedAxios;
};
