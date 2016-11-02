// @flow

import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

/**
 * Load all reducers from containers.
 */
// const requireContext: Function = require.context('../src', true, /\/reducers\/index.js$/);
// const reducers: Object = requireContext.keys().reduce((bucket, drop) => (
//     {
//         ...bucket,
//         [drop.split('/').slice(1, -2)[0]]: requireContext(drop).default,
//     }
// ), {});

const t = process.env.REDUCERS || [];
const T = typeof t === 'string' ? t.split(',') : t;
const reducers: Object = T.reduce((bucket, drop) => {
    const path: string[] = drop.split('/').slice(1, -1);
    return {
        ...bucket,
        [path.join('')]: require(`../src/${path.join('/')}/reducers/index`).default,
    };
}, {});


/**
 * Merge reducers.
 */
const rootReducer: Object = combineReducers({
    ...reducers,
    routing,
});

export default rootReducer;