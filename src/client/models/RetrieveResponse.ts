/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageStatement } from './ImageStatement';
import type { TextStatement } from './TextStatement';
/**
 * The response from a chunk retrieval request.
 */
export type RetrieveResponse = {
    summary: (string | null);
    statements: Array<(TextStatement | ImageStatement)>;
};

