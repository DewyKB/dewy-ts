/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IngestState } from './IngestState';
/**
 * Schema for documents in the SQL DB.
 */
export type Document = {
    id?: (number | null);
    collection_id: number;
    extracted_text?: (string | null);
    url: string;
    ingest_state?: (IngestState | null);
    ingest_error?: (string | null);
};

