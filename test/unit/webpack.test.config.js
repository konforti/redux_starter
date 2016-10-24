const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const config = require('../../bundler/config');
const env = 'test';
const appPath = path.join(__dirname, '../../src');
const distPath = path.join(__dirname, '../static');

console.info('loading webpack with env:', env);

module.exports = {
    devtool: 'inline-source',
    context: appPath,
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(distPath, 'index.html'),
            title: config.htmlTitle,
            template: appPath + '/index.ejs',
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
                BASE_PATH: JSON.stringify(appPath),
            },
        }),
        new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
        new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            test: /\.(scss|css)$/,
            options: {
                postcss: [
                    require('postcss-cssnext'),
                    require('precss'),
                ],
            },
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            },
            {
                test: /\.(scss|css)$/,
                include: [path.resolve(__dirname, 'src')],
                loader: ExtractTextPlugin.extract([
                    'css',
                    'postcss',
                ]),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=1192&name=images/[name].[ext]',
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.woff$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]',
            }, {
                test: /\.woff2$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]',
            }, {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: 'file-loader',
            },
        ],
    },
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    node: {
        fs: 'empty',
        child_process: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    resolve: {
        extensions: ['.js', '.scss', '.html'],
    },
    // postcss: [
    //     require('postcss-cssnext'),
    //     require('precss'),
    // ],
};
