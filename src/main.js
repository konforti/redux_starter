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

const t = process.env.STYLES || [];
const T = typeof t === 'string' ? t.split(',').filter(n => n) : t;
export default T.map(item => {
    const path: string[] = item.split('/').slice(1, -1);
    return require(`../src/${path.join('/')}/style.scss`).default;
});

/**
 * React/Redux start point.
 */
render(
    <Provider store={store}>
        <div id='viewport'>
            <Router history={history} routes={routes} />
        </div>
    </Provider>,
    document.getElementById('root')
);
