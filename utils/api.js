import {config} from './index';
import 'isomorphic-fetch';
import qs from 'qs';

/**
 * callApi
 * @param endpoint
 * @param options
 * @returns {Promise.<{}>}
 */
export async function callApi (endpoint, options = {}) {

    // Set endpoint URL, consider api base path.
    const url = (config.api_path && endpoint.indexOf(config.api_path) === -1)
        ? config.api_path + endpoint
        : endpoint;

    // Include a querystring.
    const fullUrl = (options.query && options.query instanceof Object)
        ? `${url}?${qs.stringify(options.query)}`
        : url;

    // Set request defaults.
    const defaults = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    // Set request body params.
    if (options.body && options.body instanceof Object) {
        options.body = JSON.stringify(options.body);
    }

    // Merge with defaults.
    const params = {
        ...defaults,
        ...options,
    };

    // Preform a request.
    try {
        const response = await fetch(fullUrl, params);
        if (!response.ok) {
            throw response;
        }
        const data = await response.json();
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
export const get = (endpoint, query = {}) => callApi(endpoint, {query: query});

/**
 * post
 * @param endpoint
 * @param body
 */
export const post = (endpoint, body) => callApi(endpoint, {method: 'POST', body: body});

/**
 * put
 * @param endpoint
 * @param body
 */
export const put = (endpoint, body) => callApi(endpoint, {method: 'PUT', body: body});

/**
 * patch
 * @param endpoint
 * @param body
 */
export const patch = (endpoint, body) => callApi(endpoint, {method: 'PATCH', body: body});

/**
 * delete
 * @param endpoint
 * @param body
 */
export const del = (endpoint, body) => callApi(endpoint, {method: 'DELETE', body: body});