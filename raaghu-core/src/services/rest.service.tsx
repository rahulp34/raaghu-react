import axios, { AxiosRequestConfig } from 'axios';

export async function RestService<T>(baseUrl:string, URL: string, config?: AxiosRequestConfig): Promise<T> {
  const url = baseUrl + URL;
  try {
    const response = await axios(url, config);
    return response.data as T;
  } catch (error) {
    throw new Error(`Error fetching data from ${url}: ${(error as Error).message}`);
  }
}
  