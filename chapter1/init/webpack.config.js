const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: ['./index.js', './test.js'],
    output: {
        filename: '[name]_[hash:8].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            loaders: ExtractTextPlugin.extract({
                use: ['css-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]_[contenthash:8].css'
        })
    ]
};
