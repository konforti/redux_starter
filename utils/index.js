import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configDefault from '../config/default.js';
import {EventEmitter} from 'fbemitter';
import configureStore from './store';
import rollbar from 'rollbar-browser';
import * as api from './api';
import t from './translator';

/**
 * Configuration variables based on the environment.
 */
const envConfig = require(`../config/${configDefault.env}`).default;
export const config = {...configDefault, ...envConfig};

/**
 * The Redux store.
 */
export const store = configureStore(config.env);

/**
 * Route history.
 */
export const history = syncHistoryWithStore(browserHistory, store);


/**
 * Event emitter.
 */
export const em = new EventEmitter();

/**
 * Setup Rollbar.
 */
export const log = rollbar.init({
    accessToken: config.rollbarKey,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: 'development',
    },
});

/**
 * Re-export api
 */
export {api};

/**
 * Re-export t (translator),
 */
export {t};

/**
 * Export singleton.
 */
export default {
    store,
    history,
    config,
    log,
    em,
    api,
    t,
};