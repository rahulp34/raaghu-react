/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MicroServ1904_ProductService_Products_ProductCreateDto } from '../models/MicroServ1904_ProductService_Products_ProductCreateDto';
import type { MicroServ1904_ProductService_Products_ProductDto } from '../models/MicroServ1904_ProductService_Products_ProductDto';
import type { MicroServ1904_ProductService_Products_ProductUpdateDto } from '../models/MicroServ1904_ProductService_Products_ProductUpdateDto';
import type { Volo_Abp_Application_Dtos_PagedResultDto_1 } from '../models/Volo_Abp_Application_Dtos_PagedResultDto_1';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * @returns Volo_Abp_Application_Dtos_PagedResultDto_1<any> Success
     * @throws ApiError
     */
    public static getProducts({
        filterText,
        name,
        priceMin,
        priceMax,
        sorting,
        skipCount,
        maxResultCount,
    }: {
        filterText?: string,
        name?: string,
        priceMin?: number,
        priceMax?: number,
        sorting?: string,
        skipCount?: number,
        maxResultCount?: number,
    }): CancelablePromise<Volo_Abp_Application_Dtos_PagedResultDto_1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product-service/products',
            query: {
                'FilterText': filterText,
                'Name': name,
                'PriceMin': priceMin,
                'PriceMax': priceMax,
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
     * @returns MicroServ1904_ProductService_Products_ProductDto Success
     * @throws ApiError
     */
    public static postProducts({
        requestBody,
    }: {
        requestBody?: MicroServ1904_ProductService_Products_ProductCreateDto,
    }): CancelablePromise<MicroServ1904_ProductService_Products_ProductDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/product-service/products',
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
     * @returns MicroServ1904_ProductService_Products_ProductDto Success
     * @throws ApiError
     */
    public static getProducts1({
        id,
    }: {
        id: string,
    }): CancelablePromise<MicroServ1904_ProductService_Products_ProductDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product-service/products/{id}',
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
     * @returns MicroServ1904_ProductService_Products_ProductDto Success
     * @throws ApiError
     */
    public static putProducts({
        id,
        requestBody,
    }: {
        id: string,
        requestBody?: MicroServ1904_ProductService_Products_ProductUpdateDto,
    }): CancelablePromise<MicroServ1904_ProductService_Products_ProductDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/product-service/products/{id}',
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
    public static deleteProducts({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/product-service/products/{id}',
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
