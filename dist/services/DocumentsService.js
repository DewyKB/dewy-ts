"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
class DocumentsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
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
    add(requestBody) {
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
    retrieve(requestBody) {
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
exports.DocumentsService = DocumentsService;
