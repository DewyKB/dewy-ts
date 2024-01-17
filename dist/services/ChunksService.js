"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunksService = void 0;
class ChunksService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Retrieve
     * Retrieve chunks based on a given query.
     * @param requestBody
     * @returns app__chunks__models__RetrieveResponse Successful Response
     * @throws ApiError
     */
    retrieve(requestBody) {
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
exports.ChunksService = ChunksService;
