/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddDocumentRequest } from '../models/AddDocumentRequest';
import type { Collection } from '../models/Collection';
import type { CollectionCreate } from '../models/CollectionCreate';
import type { Document } from '../models/Document';
import type { ImageChunk } from '../models/ImageChunk';
import type { RetrieveRequest } from '../models/RetrieveRequest';
import type { RetrieveResponse } from '../models/RetrieveResponse';
import type { TextChunk } from '../models/TextChunk';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Collections
     * List collections.
     * @returns Collection Successful Response
     * @throws ApiError
     */
    public listCollections(): CancelablePromise<Array<Collection>> {
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
    public addCollection(
        requestBody: CollectionCreate,
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
     * Get Collection
     * Get a specific collection.
     * @param id The collection ID.
     * @returns Collection Successful Response
     * @throws ApiError
     */
    public getCollection(
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
    /**
     * Add Document
     * Add a document.
     * @param requestBody
     * @returns Document Successful Response
     * @throws ApiError
     */
    public addDocument(
        requestBody: AddDocumentRequest,
    ): CancelablePromise<Document> {
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
    public listDocuments(
        collectionId?: (number | null),
    ): CancelablePromise<Array<Document>> {
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
    public getDocument(
        id: number,
    ): CancelablePromise<Document> {
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
     * @param page
     * @param perPage
     * @returns any Successful Response
     * @throws ApiError
     */
    public listChunks(
        collectionId?: (number | null),
        documentId?: (number | null),
        page?: (number | null),
        perPage?: (number | null),
    ): CancelablePromise<Array<(TextChunk | ImageChunk)>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/chunks/',
            query: {
                'collection_id': collectionId,
                'document_id': documentId,
                'page': page,
                'perPage': perPage,
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
    public getChunk(
        id: number,
    ): CancelablePromise<(TextChunk | ImageChunk)> {
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
    public retrieveChunks(
        requestBody: RetrieveRequest,
    ): CancelablePromise<RetrieveResponse> {
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
