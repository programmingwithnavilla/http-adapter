import axios, { AxiosInstance } from 'axios';
import { IHttpClient } from './IHttpClient';

export class AxiosClient implements IHttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  get<T>(url: string, config?: any): Promise<T> {
    return this.instance.get<T>(url, config).then((res) => res.data);
  }

  post<T>(url: string, data: any, config?: any): Promise<T> {
    return this.instance.post<T>(url, data, config).then((res) => res.data);
  }

  put<T>(url: string, data: any, config?: any): Promise<T> {
    return this.instance.put<T>(url, data, config).then((res) => res.data);
  }

  patch<T>(url: string, data: any, config?: any): Promise<T> {
    return this.instance.patch<T>(url, data, config).then((res) => res.data);
  }

  delete<T>(url: string, config?: any): Promise<T> {
    return this.instance.delete<T>(url, config).then((res) => res.data);
  }
}
