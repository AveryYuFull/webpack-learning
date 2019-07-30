const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        first: './src/first.js',
        second: './src/second.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js'
        })
    ]
};
