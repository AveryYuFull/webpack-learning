const path = require('path');
const webpack = require('webpack');
const { WebPlugin } = require('web-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        vendor: ['vue'],
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js[hash]/[name].js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        // new CleanWebpackPlugin(['./dist']),
        new WebPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            requires: ['manifest', 'common', 'vendor', 'index']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: function(module) {
              return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                  path.join(__dirname, './node_modules')
                ) === 0
              )
            },
            chunks: ['index']
          }),
          new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor', 'common', 'index']
          })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: function (module) {
        //         return module.resource && /\.js$/.test(module.resource) &&
        //             module.resource.indexOf(path.resolve(__dirname, 'node_modules')) === 0;
        //     }
        // })
    ]
}
