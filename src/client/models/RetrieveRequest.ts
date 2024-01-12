/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SynthesisMode } from './SynthesisMode';
/**
 * A request for retrieving unstructured (document) results.
 */
export type RetrieveRequest = {
    query: string;
    'n'?: number;
    synthesis_mode?: SynthesisMode;
};

