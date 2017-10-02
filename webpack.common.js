'use strict'

const path = require('path');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'app/dist'),
        chunkFilename: '[chunkhash].js',
        sourceMapFilename: '[name].map',
        libraryTarget: 'commonjs2',
    },
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            useBabel: true,
                            useCache: false,
                        },
                    },
                ],
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        // new CopyWebpackPlugin([{
        //         from: 'package.json',
        //         to:'app/package.json'
        //     }]
        // )

        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        // })
    ],

    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    
    node: {
        __dirname: false,
        __filename: false,
    }
};

const mainConfig = merge({}, commonConfig, {
    entry: { main: path.resolve(__dirname, 'src/main/main') },
    target: 'electron-main',
    plugins: [
        new CleanWebpackPlugin(['app/dist/main.*']),
    ]

    // plugins: [
    //     new webpack.DefinePlugin(
    //         Object.assign({}, replacements, {
    //             __PROCESS_KIND__: JSON.stringify('main'),
    //         })
    //     ),
    // ],
});

const indexConfig = merge({}, commonConfig, {
    entry: { index: path.resolve(__dirname, 'src/renderer/index') },
    target: 'electron-renderer',
    plugins: [
        new CleanWebpackPlugin(['app/dist/index.*']),
    ]
    // plugins: [
    //     new webpack.DefinePlugin(
    //         Object.assign({}, replacements, {
    //             __PROCESS_KIND__: JSON.stringify('main'),
    //         })
    //     ),
    // ],
});


module.exports = {
    main: mainConfig,
    index: indexConfig
}