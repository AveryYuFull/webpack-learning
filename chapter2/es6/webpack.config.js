let path = require('path');

module.exports = {
    // entry: './index.js',
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
        // {
        //     test: /\.js$/,
        //     use: ['babel-loader']
        // }, {
        //     test: /\.scss$/,
        //     use: ['style-loader', 'css-loader', 'sass-loader']
        // }, 
        {
            test: /\.vue$/,
            use: ['vue-loader'],
            options: {
                loaders: ['vue-style-loader']
            }
        }]
    }
}