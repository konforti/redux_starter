// @flow

import 'isomorphic-fetch';
import qs from 'qs';
import {config} from './';

/**
 * callApi
 * @param endpoint
 * @param options
 * @returns {Promise.<{}>}
 */
export async function callApi (endpoint: string, options: Object = {}): Promise<any> {

    // Set endpoint URL, consider api base path.
    const url: string = (config.api_path && endpoint.indexOf(config.api_path) === -1)
        ? config.api_path + endpoint
        : endpoint;

    // Include a querystring.
    const fullUrl: string = (options.query)
        ? `${url}?${qs.stringify(options.query)}`
        : url;

    // Set request defaults.
    const defaults: Object = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    // Set request body params.
    if (options.body) {
        options.body = JSON.stringify(options.body);
    }

    options.body
        ? JSON.stringify(options.body)
        : options.body;

    // Merge with defaults.
    const params: Object = {
        ...defaults,
        ...options,
    };

    // Preform a request.
    try {
        const response: Object = await fetch(fullUrl, params);
        if (!response.ok) {
            throw response;
        }
        const data: Object = await response.json();
        return data;
    } catch(error) {
        throw error;
    }
}

/**
 * get
 * @param endpoint
 * @param query
 */
export const get: Function = (endpoint: string, query: Object = {}) => callApi(endpoint, {query: query});

/**
 * post
 * @param endpoint
 * @param body
 */
export const post: Function = (endpoint: string, body: Object) => callApi(endpoint, {method: 'POST', body: body});

/**
 * put
 * @param endpoint
 * @param body
 */
export const put: Function = (endpoint: string, body: Object) => callApi(endpoint, {method: 'PUT', body: body});

/**
 * patch
 * @param endpoint
 * @param body
 */
export const patch: Function = (endpoint: string, body: Object) => callApi(endpoint, {method: 'PATCH', body: body});

/**
 * delete
 * @param endpoint
 * @param body
 */
export const del: Function = (endpoint: string, body: Object) => callApi(endpoint, {method: 'DELETE', body: body});