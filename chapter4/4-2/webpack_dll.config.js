const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
module.exports = {
    entry: {
        react: ['react', 'react-dom'],
        polyfill: ['core-js/fn/object/assign', 'core-js/fn/promise', 'whatwg-fetch']
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].dll.js',
        library: '_dll_[name]'
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
        new DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, 'lib', '[name]_manifest.json')
        })
    ]
}
