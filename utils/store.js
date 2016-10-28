// @flow

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

module.exports = function configureStore(env: string) {
    const isDev: boolean = env === 'development';

    // Middleware.
    const middleware: [] = [
        thunk,
        routerMiddleware(browserHistory),
    ];

    // Redux logger.
    if (isDev) {
        const createLogger: any = require('redux-logger');
        middleware.push(createLogger());
    }

    // Create the store.
    const store: Object = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );

    // Hot loader.
    if (isDev && module.hot) {
        // $FlowFixMe.
        module.hot.accept('./reducers', () => {
            const nextReducer: any = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};