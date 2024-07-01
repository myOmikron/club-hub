/* tslint:disable */
/* eslint-disable */
/**
 * Frontend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ApiStatusCode } from './ApiStatusCode';
import {
    ApiStatusCodeFromJSON,
    ApiStatusCodeFromJSONTyped,
    ApiStatusCodeToJSON,
} from './ApiStatusCode';

/**
 * The response that is sent in a case of an error
 * @export
 * @interface ApiErrorResponse
 */
export interface ApiErrorResponse {
    /**
     * A human-readable error message.
     * 
     * May be used for displaying purposes
     * @type {string}
     * @memberof ApiErrorResponse
     */
    message: string;
    /**
     * 
     * @type {ApiStatusCode}
     * @memberof ApiErrorResponse
     */
    statusCode: ApiStatusCode;
}

/**
 * Check if a given object implements the ApiErrorResponse interface.
 */
export function instanceOfApiErrorResponse(value: object): value is ApiErrorResponse {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function ApiErrorResponseFromJSON(json: any): ApiErrorResponse {
    return ApiErrorResponseFromJSONTyped(json, false);
}

export function ApiErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiErrorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'statusCode': ApiStatusCodeFromJSON(json['status_code']),
    };
}

export function ApiErrorResponseToJSON(value?: ApiErrorResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
        'status_code': ApiStatusCodeToJSON(value['statusCode']),
    };
}

