/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string>;
    USERNAME?: string | Resolver<string>;
    PASSWORD?: string | Resolver<string>;
    HEADERS?: Headers | Resolver<Headers>;
    ENCODE_PATH?: (path: string) => string;
};

let token = sessionStorage.getItem('accessToken');

export const OpenAPI: OpenAPIConfig = {
    BASE: sessionStorage.getItem("REACT_APP_API_URL") || '<API_URL>',
    VERSION: '1',
    WITH_CREDENTIALS: false,
    CREDENTIALS: 'include',
    TOKEN: token || undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
    ENCODE_PATH: undefined,
};
