/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from '../models/Collection';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CollectionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List
     * List collections.
     * @returns Collection Successful Response
     * @throws ApiError
     */
    public list(): CancelablePromise<Array<Collection>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/collections/',
        });
    }
    /**
     * Add
     * Create a collection.
     * @param requestBody
     * @returns Collection Successful Response
     * @throws ApiError
     */
    public add(
        requestBody: Collection,
    ): CancelablePromise<Collection> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/collections/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get
     * Get a specific collection.
     * @param id The collection ID.
     * @returns Collection Successful Response
     * @throws ApiError
     */
    public get(
        id: number,
    ): CancelablePromise<Collection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/collections/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
