const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './dev/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin()
  ],
  devServer: {
    open: true
  }
};

module.exports = config;
