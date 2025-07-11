import { IHttpClient } from './IHttpClient';
import { AxiosClient } from './AxiosClient';
import { FetchClient } from './FetchClient';

type ClientType = 'axios' | 'fetch';

class HttpClientFactory {
  private static instance: IHttpClient | null = null;

  static init(clientType: ClientType, baseURL: string): void {
    if (clientType === 'axios') {
      this.instance = new AxiosClient(baseURL);
    } else if (clientType === 'fetch') {
      this.instance = new FetchClient(baseURL);
    } else {
      throw new Error('Invalid client type');
    }
  }

  static getInstance(): IHttpClient {
    if (!this.instance) {
      throw new Error('HttpClient not initialized. Call init() first.');
    }
    return this.instance;
  }
}

export default HttpClientFactory;
