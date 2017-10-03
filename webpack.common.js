'use strict'

const path = require('path');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin')

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
                test: /\.(jsx|tsx|js|ts)$/,
                loader: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [ tsImportPluginFactory({ libraryName: "antd", style: "css" }) ]
                    }),
                    compilerOptions: {
                        module: 'es6'
                    }
                },
                exclude: /node_modules/
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            { 
                test: /\.less$/, 
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
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
        extensions: [ ".tsx", ".ts", ".js", ".json" ]
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