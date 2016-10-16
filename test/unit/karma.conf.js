require('dotenv').config();
const webpackConfig = require('./webpack.test.config.js');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],

        // list of files / patterns to load in the browser
        files: [
            'index.js',
        ],

        preprocessors: {
            // add webpack as preprocessor
            'index.js': ['webpack', 'coverage'],
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only',
        },

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],

        // reporter options
        mochaReporter: {output: 'full'},

        htmlReporter: {
            outputFile: 'index.html',

            // Optional
            pageTitle: 'Unit Tests',
            subPageTitle: 'A sample project description',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true,
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        browserStack: {
            username: process.env.BROWSERSTACK_USERNAME,
            accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
        },

        // define browsers
        customLaunchers: {
            bs_firefox_mac: {
                base: 'BrowserStack',
                browser: 'firefox',
                browser_version: '47.0',
                os: 'OS X',
                os_version: 'Mountain Lion',
            },
            bs_iphone5: {
                base: 'BrowserStack',
                device: 'iPhone 5',
                os: 'ios',
                os_version: '6.0',
            },
        },

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'bs_firefox_mac',
            'bs_iphone5',
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        coverageReporter: {
            reporters: [
                {type : 'html', dir : 'coverage/'},
                {type: 'text-summary'},
            ],
        },
    });
};
