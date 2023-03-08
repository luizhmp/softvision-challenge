import { HttpGetClient, HttpStatusCode } from '~/data/protocols/http';
import { ProductModel } from '~/domain/models';
import { GetProducts } from '~/domain/usecases';
import { UnexpectedError } from '~/domain/errors';

export class RemoteGetProducts implements GetProducts {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<ProductModel[]>,
  ) {}

  async execute(): Promise<ProductModel[]> {
    const httpResponse = await this.httpGetClient.get(this.url);

    const isSuccess = httpResponse.statusCode === HttpStatusCode.ok;

    if (isSuccess) {
      return httpResponse.body;
    } else {
      throw new UnexpectedError();
    }
  }
}
