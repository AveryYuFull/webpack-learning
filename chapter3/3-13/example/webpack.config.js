const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { WebPlugin } = require('web-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'avery_[chunkhash:8].js',
        // libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './node_modules/avery-webpack/lib'),
                use: ['source-map-loader'],
                enforce: 'pre'
            },
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory'],
                exclude: path.resolve(__dirname, './node_modules'),
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new WebPlugin({
            template: './index.html',
            filename: 'index.html',
            requires: ['index']
        })
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
}
