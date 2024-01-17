/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetrievedDocument } from './RetrievedDocument';
/**
 * The response from a chunk retrieval request.
 */
export type app__documents__models__RetrieveResponse = {
    synthesized_text: (string | null);
    documents: Array<RetrievedDocument>;
};

