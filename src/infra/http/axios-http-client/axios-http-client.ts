import { HttpGetClient, HttpResponse } from '~/data/protocols/http';
import axios, { AxiosResponse } from 'axios';

export class AxiosHttpClient implements HttpGetClient {
  async get(url: string): Promise<HttpResponse> {
    const httpResponse: AxiosResponse = await axios.get(url);

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
