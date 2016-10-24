import 'babel-polyfill';

// const testsContext = require.context('../../src', true, /.js$/);
const testsContext = require.context('../../src', true, /^^((?!(main)).)*\.js$/);
testsContext.keys().forEach(testsContext);