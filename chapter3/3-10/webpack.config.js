const path = require('path');
const { AutoWebPlugin } = require('web-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const autoWebPlugin = new AutoWebPlugin('./pages', {
    template: './template.html',
    postEntrys: ['./common.css'],
    commonsChunk: {
        name: 'common'
    },
    entry: (pageDir, options) => {
        if (pageDir === 'index') {
            return './pages/index/index.js';
        } else if (pageDir === 'login') {
            return './pages/login/login.js';
        }
    },
    filename: (pageDir, options) => {
        let _name;
        if (pageDir === 'index') {
            _name = 'indexiiiiii.html';
        } else if (pageDir === 'login') {
            _name = 'loginaaa.html';
        }
        return _name;
    }
});
console.log(autoWebPlugin.entry({

}))

module.exports = {
    entry: autoWebPlugin.entry({

    }),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, './node_module')
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
        autoWebPlugin,
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`
        }),
        new DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // 压缩输出的 JS 代码
        new UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句，可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        })
    ]
}
