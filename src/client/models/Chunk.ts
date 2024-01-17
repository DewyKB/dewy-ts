/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageContent } from './ImageContent';
import type { TextContent } from './TextContent';
/**
 * A retrieved chunk.
 */
export type Chunk = {
    content: (TextContent | ImageContent);
    score?: (number | null);
};

