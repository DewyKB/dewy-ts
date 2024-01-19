/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { CollectionsService } from './services/CollectionsService';
import { DocumentsService } from './services/DocumentsService';
import { StatementsService } from './services/StatementsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class Dewy {
    public readonly collections: CollectionsService;
    public readonly documents: DocumentsService;
    public readonly statements: StatementsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:8000',
            VERSION: config?.VERSION ?? '0.1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.collections = new CollectionsService(this.request);
        this.documents = new DocumentsService(this.request);
        this.statements = new StatementsService(this.request);
    }
}

