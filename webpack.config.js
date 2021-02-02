const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, "./src/index.js")],
    mode: "development",
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    resolve:{
        extensions:["*", ".js", "jsx"]
    },  
    devServer:{
        contentBase: path.resolve(__dirname, "./dist"),
        hot:true,
        port: 8080
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
    
}