// @flow

import React from 'react';
import Root from '../src/Root';
import {config} from './';

// const requireContext: Function = require.context('../src', true, /\/routes\/index.js$/);
// const children: [] = requireContext.keys().map(k => requireContext(k).default);
// const flat: [] = [].concat(...children);

const children: [] = process.env.ROUTES.map(item => {
    const path: string[] = item.split('/').slice(1, -1);
    return require(`../src/${path.join('/')}/routes/index`).default;
});

const flat: [] = [].concat(...children);

const routes = {
    childRoutes: [
        {
            path: config.pathPrefix,
            component: Root,

            childRoutes: flat,
            // getChildRoutes(location, cb) {
            //     cb(null, children)
            // }
        }, {
            path: '*',
            getComponent(nextState: Object, cb: Function) {
                cb(null, () => (<div>404 Not Found</div>));
            },
        },
    ],
};

export default routes;