const path = require('path');
const { WebPlugin } = require('web-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                // options: {
                //   formatter: require('eslint-friendly-formatter')
                // }
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/
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
            requires: ['app']
        })
    ]
};
