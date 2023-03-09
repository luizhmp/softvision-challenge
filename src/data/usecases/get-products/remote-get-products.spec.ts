import { HttpGetClientSpy } from '~/data/test';
import { RemoteGetProducts } from '~/data/usecases/get-products';
import { HttpStatusCode } from '~/data/protocols/http';
import { ProductModel } from '~/domain/models';
import { mockProductModel } from '~/domain/test';
import { UnexpectedError } from '~/domain/errors';
import { faker } from '@faker-js/faker';

interface SutInterface {
  sut: RemoteGetProducts;
  httpGetClientSpy: HttpGetClientSpy<ProductModel>;
}

const makeSut = (url = faker.internet.url()): SutInterface => {
  const httpGetClientSpy = new HttpGetClientSpy<ProductModel>();
  const sut = new RemoteGetProducts(url, httpGetClientSpy);

  return {
    sut,
    httpGetClientSpy,
  };
};

describe('RemoteGetProducts', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpGetClientSpy } = makeSut(url);
    await sut.execute();

    expect(httpGetClientSpy.url).toBe(url);
  });

  test('Should throw UnexpectedError if HttpGetClient returns 400', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const httpResult = mockProductModel();
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
      body: httpResult,
    };
    const promise = sut.execute();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should return a ProductModel if HttpGetClient returns 200', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const httpResult = mockProductModel();
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const product = await sut.execute();

    await expect(product).toEqual(httpResult);
  });
});
