// @flow

import 'babel-polyfill';
import React from 'react';
import {Router} from 'react-router';
import routes from '~/utils/routes';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store, history} from '~/utils';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/**
 * Load all styles.
 */
require.context('./', true, /\.scss$/);

render(
    <Provider store={store}>
        <div id='viewport'>
            <Router history={history} routes={routes} />
        </div>
    </Provider>,
    document.getElementById('root')
);
