require('dotenv').config();

const child_process = require('child_process');
const browserstack = require('browserstack-local');

const bs_local = new browserstack.Local();
const bs_local_args = { 'key': process.env.BROWSERSTACK_ACCESS_KEY, 'forcelocal': true };

bs_local.start(bs_local_args, function(error) {
    if (error) {
        console.info(error);
    } else {
        console.info('Connected. Now testing...');

        const child = child_process.execSync('./node_modules/.bin/nightwatch -c test/e2e/nightwatch_local.conf.js', { stdio: [ 0, 0, 0 ] });

        if (child) {
            child.on('exit', function() {
                if(bs_local) {
                    bs_local.stop(function() {});
                }

                window.exit(0);
            });
        }
    }
    if(bs_local) {
        bs_local.stop(function() {});
    }
});