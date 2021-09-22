const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
    name: 'flex',
    mode: 'production',
    context: path.resolve(__dirname, './'),
    entry: {
        index: './src/js/script.js',
        temp: './src/js/css.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build'),
    },
    optimization: {
        minimize: true,
        minimizer: [
        new CssMinimizerPlugin()
        ]
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader'
            }
            ],
        }
        ]
    },
    plugins: [
    new MiniCssExtractPlugin({
        filename: 'index.css'
    }),
    new RemovePlugin({
        after: {
            root: path.resolve(__dirname, './build'),
            include: ['temp.js'],
        }
    })
    ]
};
