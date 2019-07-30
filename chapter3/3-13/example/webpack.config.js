const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { WebPlugin } = require('web-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'avery_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, './node_modules')
            },
            {
                test: /.css$/,
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
    ]
}
