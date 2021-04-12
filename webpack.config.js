const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: {
        main: './src/index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: false,
        // stats: 'normal' //标准输出 默认
        stats: 'minimal'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'     //在这个目录下建立index.html文件，body里面加上<div id="root"></div>
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}