/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Acme_BookStore_Books_Dto_BookDto } from '../models/Acme_BookStore_Books_Dto_BookDto';
import type { Acme_BookStore_Books_Dto_CreateUpdateBookDto } from '../models/Acme_BookStore_Books_Dto_CreateUpdateBookDto';
import type { Volo_Abp_Application_Dtos_PagedResultDto_1 } from '../models/Volo_Abp_Application_Dtos_PagedResultDto_1';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookService {

    /**
     * @returns Acme_BookStore_Books_Dto_BookDto Success
     * @throws ApiError
     */
    public static postBook({
        requestBody,
    }: {
        requestBody?: Acme_BookStore_Books_Dto_CreateUpdateBookDto,
    }): CancelablePromise<Acme_BookStore_Books_Dto_BookDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/book',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Application_Dtos_PagedResultDto_1<any> Success
     * @throws ApiError
     */
    public static getBook({
        sorting,
        skipCount,
        maxResultCount,
    }: {
        sorting?: string,
        skipCount?: number,
        maxResultCount?: number,
    }): CancelablePromise<Volo_Abp_Application_Dtos_PagedResultDto_1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/book',
            query: {
                'Sorting': sorting,
                'SkipCount': skipCount,
                'MaxResultCount': maxResultCount,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Acme_BookStore_Books_Dto_BookDto Success
     * @throws ApiError
     */
    public static putBook({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: Acme_BookStore_Books_Dto_CreateUpdateBookDto,
    }): CancelablePromise<Acme_BookStore_Books_Dto_BookDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/app/book/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static deleteBook({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/app/book/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Acme_BookStore_Books_Dto_BookDto Success
     * @throws ApiError
     */
    public static getBook1({
        id,
    }: {
        id: string,
    }): CancelablePromise<Acme_BookStore_Books_Dto_BookDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/book/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

}
