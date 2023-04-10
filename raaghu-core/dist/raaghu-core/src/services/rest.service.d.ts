import { AxiosRequestConfig } from 'axios';
export declare function RestService<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
