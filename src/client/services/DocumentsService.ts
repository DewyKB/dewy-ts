/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__documents__models__RetrieveResponse } from '../models/app__documents__models__RetrieveResponse';
import type { RetrieveRequest } from '../models/RetrieveRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DocumentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add
     * Add a document to the unstructured collection.
     *
     * Parameters:
     * - collection: The ID of the collection to add to.
     * - document: The URL of the document to add.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public add(
        requestBody: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/documents/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Retrieve
     * Retrieve documents based on a given query.
     * @param requestBody
     * @returns app__documents__models__RetrieveResponse Successful Response
     * @throws ApiError
     */
    public retrieve(
        requestBody: RetrieveRequest,
    ): CancelablePromise<app__documents__models__RetrieveResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/documents/retrieve',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
