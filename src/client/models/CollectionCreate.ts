/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DistanceMetric } from './DistanceMetric';
/**
 * The request to create a collection.
 */
export type CollectionCreate = {
    name: string;
    text_embedding_model?: string;
    text_distance_metric?: DistanceMetric;
};

