import 'babel-polyfill';

const testsContext = require.context('../../src', true, /test.js$/);
testsContext.keys().forEach(testsContext);