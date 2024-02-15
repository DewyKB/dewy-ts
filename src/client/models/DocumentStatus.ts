/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IngestState } from './IngestState';
/**
 * Model for document status.
 */
export type DocumentStatus = {
    id: number;
    ingest_state: IngestState;
    ingest_error?: (string | null);
};

