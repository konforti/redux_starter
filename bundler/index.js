const path = require('path');
const express = require('express');
const logger = require('./logger');
const serverConfig = require('./config');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const port = serverConfig.port;
const app = new (express)();

if (isDev) {
    const webpack = require('webpack');
    const wpConfig = require('./webpack.config.js');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const compiler = webpack(wpConfig);
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: wpConfig.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));

    app.use((req, res, next) => {
        const filename = path.join(compiler.outputPath,'src/index.html');
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type','text/html');
            res.send(result);
            res.end();
        });
    });
} else {
    app.use(express.static('static'));
    app.use((req, res) => {
        res.sendFile(`${process.cwd()}/static/index.html`);
    });
}

app.listen(port, (error) => {
    error
        ? logger.error(error)
        : logger.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
