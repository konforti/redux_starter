import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';

/**
 * Load all reducers from containers.
 */
const requireContext = require.context('../src', true, /\/reducers\/index.js$/);
const reducers = requireContext.keys().reduce((bucket, drop) => (
    {
        ...bucket,
        [drop.split('/').slice(1, -2)[0]]: requireContext(drop).default,
    }
), {});


/**
 * Merge reducers.
 */
const rootReducer = combineReducers({
    ...reducers,
    routing,
});

export default rootReducer;     