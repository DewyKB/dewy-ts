"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = exports.ChunksService = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.BaseHttpRequest = exports.ApiError = exports.Dewy = void 0;
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var Dewy_1 = require("./Dewy");
Object.defineProperty(exports, "Dewy", { enumerable: true, get: function () { return Dewy_1.Dewy; } });
var ApiError_1 = require("./core/ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var BaseHttpRequest_1 = require("./core/BaseHttpRequest");
Object.defineProperty(exports, "BaseHttpRequest", { enumerable: true, get: function () { return BaseHttpRequest_1.BaseHttpRequest; } });
var CancelablePromise_1 = require("./core/CancelablePromise");
Object.defineProperty(exports, "CancelablePromise", { enumerable: true, get: function () { return CancelablePromise_1.CancelablePromise; } });
Object.defineProperty(exports, "CancelError", { enumerable: true, get: function () { return CancelablePromise_1.CancelError; } });
var OpenAPI_1 = require("./core/OpenAPI");
Object.defineProperty(exports, "OpenAPI", { enumerable: true, get: function () { return OpenAPI_1.OpenAPI; } });
var ChunksService_1 = require("./services/ChunksService");
Object.defineProperty(exports, "ChunksService", { enumerable: true, get: function () { return ChunksService_1.ChunksService; } });
var DocumentsService_1 = require("./services/DocumentsService");
Object.defineProperty(exports, "DocumentsService", { enumerable: true, get: function () { return DocumentsService_1.DocumentsService; } });