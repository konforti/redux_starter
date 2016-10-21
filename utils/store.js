import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

module.exports = function configureStore(env) {
    const isDev = env === 'development';

    // Middleware.
    const middleware = [
        thunk,
        routerMiddleware(browserHistory),
    ];

    // Redux logger.
    if (isDev) {
        const createLogger = require('redux-logger');
        middleware.push(createLogger());
    }

    // Create the store.
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );

    // Hot loader.
    if (isDev && module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};
