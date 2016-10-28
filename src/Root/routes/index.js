// @flow

export default [
    {
        path: '/',
        onEnter: (nextState: Object, replace: Function) => {
            replace('/topic/music');
        },
    }, {
        path: 'topic/:slug',
        getComponent: async(nextState: Object, cb: Function) => {
            const module = await require('../components/topic');
            cb(null, module.default);
        },
    },{
        path: 'search',
        getComponent: async(nextState: Object, cb: Function) => {
            const module = await require('../components/search');
            cb(null, module.default);
        },
    }, {
        path: 'bookmarks',
        getComponent: async(nextState: Object, cb: Function) => {
            const module = await require('../components/bookmarks');
            cb(null, module.default);
        },
    },
];