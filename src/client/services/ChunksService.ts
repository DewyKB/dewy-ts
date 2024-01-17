/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__chunks__models__RetrieveResponse } from '../models/app__chunks__models__RetrieveResponse';
import type { RetrieveRequest } from '../models/RetrieveRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChunksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve
     * Retrieve chunks based on a given query.
     * @param requestBody
     * @returns app__chunks__models__RetrieveResponse Successful Response
     * @throws ApiError
     */
    public retrieve(
        requestBody: RetrieveRequest,
    ): CancelablePromise<app__chunks__models__RetrieveResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/chunks/retrieve',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
