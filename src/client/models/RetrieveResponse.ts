/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageResult } from './ImageResult';
import type { TextResult } from './TextResult';
/**
 * The response from a retrieval request.
 */
export type RetrieveResponse = {
    summary: (string | null);
    text_results: Array<TextResult>;
    image_results: Array<ImageResult>;
};

