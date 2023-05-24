/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Acme_BookStore_Books_Dto_BookDto = {
    properties: {
        id: {
            type: 'string',
            format: 'uuid',
        },
        creationTime: {
            type: 'string',
            format: 'date-time',
        },
        creatorId: {
            type: 'string',
            isNullable: true,
            format: 'uuid',
        },
        lastModificationTime: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        lastModifierId: {
            type: 'string',
            isNullable: true,
            format: 'uuid',
        },
        name: {
            type: 'string',
            isNullable: true,
        },
        type: {
            type: 'Acme_BookStore_Books_BookType',
        },
        publishDate: {
            type: 'string',
            format: 'date-time',
        },
        price: {
            type: 'number',
            format: 'float',
        },
    },
} as const;
