import axios, { AxiosRequestConfig } from 'axios';

const API_URL ="https://raaghu-react.azurewebsites.net"
export async function RestService<T>( url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    url = API_URL + url;
    const response = await axios(url, config);
    return response.data as T;
  } catch (error) {
    throw new Error(`Error fetching data from ${url}: ${(error as Error).message}`);
  }
}
  