export default [
    {
        path: '/',
        onEnter: (nextState, replace) => {
            replace('/topic/music');
        },
    }, {
        path: 'topic/:slug',
        getComponent: async(nextState, cb) => {
            const module = await System.import('../components/topic');
            cb(null, module.default);
        },
    },{
        path: 'search',
        getComponent: async(nextState, cb) => {
            const module = await System.import('../components/search');
            cb(null, module.default);
        },
    }, {
        path: 'bookmarks',
        getComponent: async(nextState, cb) => {
            const module = await System.import('../components/bookmarks');
            cb(null, module.default);
        },
    },
];