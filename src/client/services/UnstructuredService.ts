/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetrieveRequest } from '../models/RetrieveRequest';
import type { RetrieveResponse } from '../models/RetrieveResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UnstructuredService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add Document Unstructured
     * Add a document to the unstructured collection.
     *
     * Parameters:
     * - collection: The ID of the collection to add to.
     * - document: The URL of the document to add.
     * @param collection the name of the collection
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public addDocument(
        collection: string,
        requestBody: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/unstructured/{collection}/documents',
            path: {
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Document Unstructured
     * Delete a document from the unstructured collection.
     *
     * Parameters:
     * - collection: The ID of the collection to remove from.
     * - document: The ID of the document to remove.
     * @param document
     * @param collection the name of the collection
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteDocument(
        document: string,
        collection: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/unstructured/{collection}/documents/{document}',
            path: {
                'document': document,
                'collection': collection,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Retrieve Documents Unstructured
     * Retrieve chunks based on a given query.
     * @param collection the name of the collection
     * @param requestBody
     * @returns RetrieveResponse Successful Response
     * @throws ApiError
     */
    public retrieve(
        collection: string,
        requestBody: RetrieveRequest,
    ): CancelablePromise<RetrieveResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/unstructured/{collection}/retrieve',
            path: {
                'collection': collection,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
