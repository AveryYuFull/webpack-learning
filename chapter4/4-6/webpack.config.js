const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory']
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
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'index.html'),
        //     filename: "index.html"
        // }),
        new ExtractTextPlugin({
            filename: '[name]_[contenthash:8].css'
        })
    ]
}
