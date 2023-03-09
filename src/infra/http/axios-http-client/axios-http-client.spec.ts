import { mockGetRequest } from '~/data/test';
import { AxiosHttpClient } from './axios-http-client';
import { mockAxios } from '~/infra/test';
import axios from 'axios';

jest.mock('axios');

interface SutInterface {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
}

const makeSut = (): SutInterface => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();

  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const { url } = mockGetRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.get(url);

    expect(mockedAxios.get).toHaveBeenCalledWith(url);
  });

  test('Should return the correct statusCode and body', () => {
    const { url } = mockGetRequest();
    const { sut, mockedAxios } = makeSut();
    const promise = sut.get(url);

    expect(promise).toEqual(mockedAxios.get.mock.results[0].value);
  });
});
