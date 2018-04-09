const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './src/js/app.js',
        './src/scss/main.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    mode: 'development',
    module: {

        rules: [
            { // regular css files
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader?importLoaders=1',
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader: "file-loader"
            },
            { // font-awesome
                test: /font-awesome\.config\.js/,
                use: [
                    { loader: 'css-loader' },
                    { loader: 'font-awesome-loader' }
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({ 
            filename: 'css/[name].bundle.css',
            allChunks: true,
        }),
        new CopyWebpackPlugin([
            { 
                from: 'src/images',
                to: 'images'
            } 
        ])
    ],
}; 