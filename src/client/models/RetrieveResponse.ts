/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NodeWithScore } from './NodeWithScore';
/**
 * The response from a retrieval request.
 */
export type RetrieveResponse = {
    synthesized_text: (string | null);
    retrieved_nodes: Array<NodeWithScore>;
};

