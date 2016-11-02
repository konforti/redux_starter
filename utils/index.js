// @flow

import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {EventEmitter} from 'fbemitter';
// import rollbar from 'rollbar-browser';

import t from './translator';
import configureStore from './store';
import * as api from './api';
import './styles';
import configDefault from '../config/default';

/**
 * Configuration variables based on the environment.
 */

// $FlowFixMe
const envConfig = require(`../config/${configDefault.env}`).default; // eslint-disable-line import/no-dynamic-require
export const config: Object = {...configDefault, ...envConfig};

/**
 * The Redux store.
 */
export const store: Object = configureStore(config.env);

/**
 * Route history.
 */
export const history: Object = syncHistoryWithStore(browserHistory, store);

/**
 * Event emitter.
 */
export const em: Object = new EventEmitter();

/**
 * Setup Rollbar.
 */
// export const log: Object = rollbar.init({
//     accessToken: config.rollbarKey,
//     captureUncaught: true,
//     captureUnhandledRejections: true,
//     payload: {
//         environment: 'development',
//     },
//     enabled: false,
// });

/**
 * Re-export api
 */
export {api};

/**
 * Re-export t (translator),
 */
export {t};

export default {
    store,
    history,
    config,
    // log,
    em,
    api,
    t,
};