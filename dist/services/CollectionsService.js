"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsService = void 0;
class CollectionsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List
     * List collections.
     * @returns Collection Successful Response
     * @throws ApiError
     */
    list() {
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
    add(requestBody) {
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
    get(id) {
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
exports.CollectionsService = CollectionsService;
