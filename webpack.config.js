const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlExtractPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
   
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      { 
        test: /\.graphql?$/,
        loader: 'webpack-graphql-loader'
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlExtractPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
      path: path.resolve(__dirname, 'dist'),
    }),
  ],
}