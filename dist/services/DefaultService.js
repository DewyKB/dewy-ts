"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultService = void 0;
class DefaultService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List Collections
     * List collections.
     * @returns Collection Successful Response
     * @throws ApiError
     */
    listCollections() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/collections/',
        });
    }
    /**
     * Add Collection
     * Create a collection.
     * @param requestBody
     * @returns Collection Successful Response
     * @throws ApiError
     */
    addCollection(requestBody) {
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
     * Get Collection
     * Get a specific collection.
     * @param id The collection ID.
     * @returns Collection Successful Response
     * @throws ApiError
     */
    getCollection(id) {
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
    /**
     * Add Document
     * Add a document.
     * @param requestBody
     * @returns Document Successful Response
     * @throws ApiError
     */
    addDocument(requestBody) {
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
     * List Documents
     * List documents.
     * @param collectionId Limit to documents associated with this collection
     * @returns Document Successful Response
     * @throws ApiError
     */
    listDocuments(collectionId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/documents/',
            query: {
                'collection_id': collectionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Document
     * @param id The document ID.
     * @returns Document Successful Response
     * @throws ApiError
     */
    getDocument(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/documents/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Chunks
     * List chunks.
     * @param collectionId Limit to chunks associated with this collection
     * @param documentId Limit to chunks associated with this document
     * @returns any Successful Response
     * @throws ApiError
     */
    listChunks(collectionId, documentId) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/chunks/',
            query: {
                'collection_id': collectionId,
                'document_id': documentId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Chunk
     * @param id The chunk ID.
     * @returns any Successful Response
     * @throws ApiError
     */
    getChunk(id) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/chunks/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Retrieve Chunks
     * Retrieve chunks based on a given query.
     * @param requestBody
     * @returns RetrieveResponse Successful Response
     * @throws ApiError
     */
    retrieveChunks(requestBody) {
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
exports.DefaultService = DefaultService;
