const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/ //排除监听更改
    },
    devServer: {
        historyApiFallback: true, //解决页面刷新404问题
        contentBase: path.resolve(__dirname), //文件变化更新
        watchContentBase: true,
        compress: true,
        port: 9000, //端口
        open: false, //自动打开默认浏览器浏览器启动项目
        // stats: 'normal' //标准输出 默认
        //liveReload: false,//文件修改，开发服务器将重新加载/刷新页面 必须禁用 devServer.hot 选项或必须启用 devServer.watchContentBase 选项，
        stats: 'minimal',
        // inline: true,
        // publicPath: publicPath, //添加
        hot: true, //热更新
        hotOnly: true
        // overlay出现编译器错误或警告时，在浏览器中显示全屏覆盖
        // proxy: {
        //     '/api': {
        //         target: 'http://192.168.178.1:3000/',
        //         changeOrigin: true,
        //         secure: false,
        //         pathRewrite: { '^/api': '' }
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            template: './src/public/index.html' //在这个目录下建立index.html文件，body里面加上<div id="root"></div>
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};
