import { HttpResponse } from './http-response';

export interface HttpGetClient<T = any> {
  get(url: string): Promise<HttpResponse<T>>;
}
