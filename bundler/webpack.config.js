const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const config = require('./config');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const appPath = path.join(__dirname, '../src');
const distPath = path.join(__dirname, '../static');

console.info('loading webpack with env:', env);

module.exports = {
    devtool: isDev
        ? 'source-map'
        : 'source',

    context: appPath,
    entry: {
        app: isDev
            ? ['webpack-hot-middleware/client', './main.js']
            : ['./main.js'],

        vendor: [
            'lodash',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
        ],
    },
    output: {
        path: isDev
            ? appPath
            : distPath,

        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new FlowStatusWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: isDev
                ? 'src/index.html'
                : path.join(distPath, 'index.html'),
            title: config.htmlTitle,
            template: appPath + '/index.ejs',
        }),
        new CopyWebpackPlugin([
            {from: 'images', to: 'images'},
        ]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
                BASE_PATH: JSON.stringify(appPath),
                REDUCERS: JSON.stringify(glob.sync('src/**/reducers')),
                ROUTES: JSON.stringify(glob.sync('src/**/routes')),
                TRANSLATIONS: JSON.stringify(glob.sync('src/**/translations')),
                STYLES: JSON.stringify(glob.sync('src/**/style.scss')),
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
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
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: isDev
                    ? ['react-hot', 'babel']
                    : ['babel'],
            }, {
                test: /\.(scss|css)$/,
                include: appPath,
                loader: ExtractTextPlugin.extract([
                    'css',
                    // 'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss',
                ]),
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file?name=images/[name].[ext]',
            }, {
                test: /\.json$/,
                loader: 'json',
            }, {
                test: /\.woff$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]',
            }, {
                test: /\.woff2$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]',
            }, {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: 'file',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.scss', '.html'],
    },
    // postcss: [
    //     require('postcss-cssnext'),
    //     require('precss'),
    // ],
};
