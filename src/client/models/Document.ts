/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IngestState } from './IngestState';
/**
 * Model for documents in Dewy.
 */
export type Document = {
    id?: (number | null);
    collection: string;
    extracted_text?: (string | null);
    url?: (string | null);
    ingest_state?: (IngestState | null);
    ingest_error?: (string | null);
};

