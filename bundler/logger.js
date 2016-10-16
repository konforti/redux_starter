/* eslint-disable no-console */

const chalk = require('chalk');

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {

    // Called whenever there's an error on the server we want to print
    error: err => {
        console.error(chalk.red(err));
    },

    // Called when express.js app starts on given port w/o errors
    info: info => {
        console.info(chalk.green(`✓ ${info}`));
    },
};

module.exports = logger;
