'use strict'

const merge = require('webpack-merge');
const common = require('./webpack.common.js');


const config = {
    devtool: 'source-map',
}

const mainConfig = merge({}, common.main, config);
const indexConfig = merge({}, common.index, config);

module.exports = [
    mainConfig,
    indexConfig
]