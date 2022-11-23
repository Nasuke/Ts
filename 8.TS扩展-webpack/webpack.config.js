
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePloyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: './bundle.js'
    },
    devServer: {
        
    },
    resolve: {
        extensions: ['.ts', '.js', '.cjs', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.(png|jpg|svg|jpeg)$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new NodePloyfillPlugin()
    ]
}