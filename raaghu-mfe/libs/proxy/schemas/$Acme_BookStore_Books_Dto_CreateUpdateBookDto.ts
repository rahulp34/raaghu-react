/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Acme_BookStore_Books_Dto_CreateUpdateBookDto = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
            maxLength: 128,
        },
        type: {
            type: 'Acme_BookStore_Books_BookType',
            isRequired: true,
        },
        publishDate: {
            type: 'string',
            isRequired: true,
            format: 'date',
        },
        price: {
            type: 'number',
            isRequired: true,
            format: 'float',
        },
    },
} as const;
