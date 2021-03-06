require('dotenv').config();

const capabilities = {
    build: 'Cloudinary tests for Nightwatch',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
    'browserstack.debug': true,
    'browserstack.local': true,
};

const nightwatch_config = {
    src_folders : ['src'],

    selenium : {
        'start_process' : false,
        // 'host' : 'hub.browserstack.com',
        // 'port' : 80
    },

    test_settings: {
        default: {
            'filter' : '**/test.e2e.js',
            selenium_host  : 'hub.browserstack.com',
            selenium_port  : 80,
            silent: true,
            desiredCapabilities: capabilities,
        },
        chrome_48: {
            selenium_host  : 'hub.browserstack.com',
            selenium_port  : 80,
            silent: true,
            desiredCapabilities: Object.assign({}, capabilities, {
                browser: 'chrome',
                browser_version: '48',
                os: 'Windows',
                os_version: '10',
            }),
        },
        firefox_45: {
            selenium_host  : 'hub.browserstack.com',
            selenium_port  : 80,
            silent: true,
            desiredCapabilities: Object.assign({}, capabilities, {
                browser: 'firefox',
                browser_version: '45',
                os: 'OS X',
                os_version: 'El Capitan',
            }),
        },
    },
};

module.exports = nightwatch_config;