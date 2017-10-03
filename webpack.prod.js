'use strict'

const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const BabelPlugin = require('babel-webpack-plugin')

const config = {
    devtool: 'source-map',

    plugins: [
        new BabelPlugin({
            test: /\.js$/,
            sourceMaps: true,
            compact: true,
            minified: true,
            comments: false,
            presets: [
                [ 'minify', {evaluate: false} ],
            ],
        }),

        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};


const mainConfig = merge({}, common.main, config);
const indexConfig = merge({}, common.index, config);
  
module.exports = [
    mainConfig,
    indexConfig
]