const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DllRefrencePlugin = require('webpack/lib/DllReferencePlugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // new WebPlugin({
        //     template: './index.html',
        //     filename: 'index.html',
        //     requires: ['main']
        // }),
        new AddAssetHtmlPlugin([{
            filepath: path.resolve(__dirname, './lib/*.dll.js'),
            outputPath: 'vendor',
            publicPath: 'vendor',
            includeSourcemap: false
          }]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            title: 'webpack_dll使用',
            inject: true
        }),
        new DllRefrencePlugin({
            manifest: require('./lib/react_manifest.json')
        }),
        new DllRefrencePlugin({
            manifest: require('./lib/polyfill_manifest.json')
        })
    ],
    devtool: 'source-map'
}