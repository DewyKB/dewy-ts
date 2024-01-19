"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dewy = void 0;
const FetchHttpRequest_1 = require("./core/FetchHttpRequest");
const CollectionsService_1 = require("./services/CollectionsService");
const DocumentsService_1 = require("./services/DocumentsService");
const StatementsService_1 = require("./services/StatementsService");
class Dewy {
    constructor(config, HttpRequest = FetchHttpRequest_1.FetchHttpRequest) {
        var _a, _b, _c, _d;
        this.request = new HttpRequest({
            BASE: (_a = config === null || config === void 0 ? void 0 : config.BASE) !== null && _a !== void 0 ? _a : 'http://localhost:8000',
            VERSION: (_b = config === null || config === void 0 ? void 0 : config.VERSION) !== null && _b !== void 0 ? _b : '0.1.0',
            WITH_CREDENTIALS: (_c = config === null || config === void 0 ? void 0 : config.WITH_CREDENTIALS) !== null && _c !== void 0 ? _c : false,
            CREDENTIALS: (_d = config === null || config === void 0 ? void 0 : config.CREDENTIALS) !== null && _d !== void 0 ? _d : 'include',
            TOKEN: config === null || config === void 0 ? void 0 : config.TOKEN,
            USERNAME: config === null || config === void 0 ? void 0 : config.USERNAME,
            PASSWORD: config === null || config === void 0 ? void 0 : config.PASSWORD,
            HEADERS: config === null || config === void 0 ? void 0 : config.HEADERS,
            ENCODE_PATH: config === null || config === void 0 ? void 0 : config.ENCODE_PATH,
        });
        this.collections = new CollectionsService_1.CollectionsService(this.request);
        this.documents = new DocumentsService_1.DocumentsService(this.request);
        this.statements = new StatementsService_1.StatementsService(this.request);
    }
}
exports.Dewy = Dewy;
