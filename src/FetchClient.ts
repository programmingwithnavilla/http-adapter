import { IHttpClient } from './IHttpClient';

export class FetchClient implements IHttpClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    method: string,
    url: string,
    data?: any,
    config?: RequestInit,
  ): Promise<T> {
    const headers = {
      'Content-Type': 'application/json',
      ...(config?.headers || {}),
    };

    const response = await fetch(`${this.baseURL}${url}`, {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  get<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('GET', url, undefined, config);
  }

  post<T>(url: string, data: any, config?: RequestInit): Promise<T> {
    return this.request<T>('POST', url, data, config);
  }

  put<T>(url: string, data: any, config?: RequestInit): Promise<T> {
    return this.request<T>('PUT', url, data, config);
  }

  patch<T>(url: string, data: any, config?: RequestInit): Promise<T> {
    return this.request<T>('PATCH', url, data, config);
  }

  delete<T>(url: string, config?: RequestInit): Promise<T> {
    return this.request<T>('DELETE', url, undefined, config);
  }
}
