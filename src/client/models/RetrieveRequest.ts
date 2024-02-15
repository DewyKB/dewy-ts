/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A request for retrieving chunks from a collection.
 */
export type RetrieveRequest = {
    collection: string;
    query: string;
    'n'?: number;
    include_text_chunks?: boolean;
    include_image_chunks?: boolean;
    include_summary?: boolean;
};

