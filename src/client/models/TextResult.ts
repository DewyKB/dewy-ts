/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TextResult = {
    chunk_id: number;
    document_id: number;
    score: number;
    text: string;
    raw: boolean;
    /**
     * Start char index of the chunk.
     */
    start_char_idx?: (number | null);
    /**
     * End char index of the chunk.
     */
    end_char_idx?: (number | null);
};

