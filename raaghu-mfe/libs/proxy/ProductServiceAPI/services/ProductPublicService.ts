/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MicroServ1904_ProductService_Products_ProductDto } from '../models/MicroServ1904_ProductService_Products_ProductDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProductPublicService {

    /**
     * @returns MicroServ1904_ProductService_Products_ProductDto Success
     * @throws ApiError
     */
    public static getPublicProducts(): CancelablePromise<Array<MicroServ1904_ProductService_Products_ProductDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product-service/public/products',
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
