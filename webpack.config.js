const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3333;

const config = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port,
        contentBase: './dist',
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html',
            inject: false
        })
    ]
};

module.exports = config;