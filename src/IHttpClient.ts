export interface IHttpClient {
  get<T>(url: string, config?: any): Promise<T>;
  post<T>(url: string, data: any, config?: any): Promise<T>;
  put<T>(url: string, data: any, config?: any): Promise<T>;
  patch<T>(url: string, data: any, config?: any): Promise<T>;
  delete<T>(url: string, config?: any): Promise<T>;
}
