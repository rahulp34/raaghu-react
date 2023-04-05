/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Acme_BookStore_Books_BookType } from './Acme_BookStore_Books_BookType';

export type Acme_BookStore_Books_Dto_BookDto = {
    id?: string;
    creationTime?: string;
    creatorId?: string | null;
    lastModificationTime?: string | null;
    lastModifierId?: string | null;
    name?: string | null;
    type?: Acme_BookStore_Books_BookType;
    publishDate?: string;
    price?: number;
};
