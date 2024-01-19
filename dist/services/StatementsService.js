"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementsService = void 0;
class StatementsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Retrieve
     * Retrieve statements based on a given query.
     * @param requestBody
     * @returns RetrieveResponse Successful Response
     * @throws ApiError
     */
    retrieve(requestBody) {
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
exports.StatementsService = StatementsService;
