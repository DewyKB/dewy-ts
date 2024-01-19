"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
class DocumentsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Add
     * Add a document.
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
}
exports.DocumentsService = DocumentsService;
