import { HttpGetClient, HttpResponse, HttpStatusCode } from '~/data/protocols/http';

export class HttpGetClientSpy<T> implements HttpGetClient<T> {
  url?: string;

  body?: T;

  response: HttpResponse = {
    statusCode: HttpStatusCode.ok,
    body: this.body,
  };

  async get(url: string): Promise<HttpResponse> {
    this.url = url;

    return Promise.resolve(this.response);
  }
}
