/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetrieveRequest } from '../models/RetrieveRequest';
import type { RetrieveResponse } from '../models/RetrieveResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatementsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve
     * Retrieve statements based on a given query.
     * @param requestBody
     * @returns RetrieveResponse Successful Response
     * @throws ApiError
     */
    public retrieve(
        requestBody: RetrieveRequest,
    ): CancelablePromise<RetrieveResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/statements/retrieve',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
