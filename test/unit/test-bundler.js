import 'babel-polyfill';

const testsContext = require.context('../../src', true, /test.js$/);
testsContext.keys().forEach(testsContext);

// const componentsContext = require.context('../../src', true, /^((?!main).)*\.js$/);
// const componentsContext = require.context('../../src', true, /index.js$/);
// componentsContext.keys().forEach(componentsContext);