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
            minChunks: 'Infinity'
        }),
    //    new webpack.optimize.CommonsChunkPlugin({
    //        name: 'vendor',
    //        filename: '[name].js',
    //        minChunks: function (module, count) {
    //            let _flag = module.resource && /\.js$/.test(module.resource) &&
    //                 module.resource.indexOf(path.join(__dirname, 'node_modules')) === 0;
    //            return _flag;
    //        } 
    //    }),
       new webpack.optimize.CommonsChunkPlugin({
           name: 'runtime',
           filename: '[name].js',
           chunks: ['vendor']
       }),
    //    new webpack.optimize.CommonsChunkPlugin({
    //        name: 'manifest',
    //        chunks: ['runtime']
    //    }),
    //    new webpack.optimize.CommonsChunkPlugin({
    //         name: 'common',
    //         filename: '[name].js',
    //         chunks: ['first','second']//从first.js和second.js中抽取commons chunk
    //     })
    ]
};
