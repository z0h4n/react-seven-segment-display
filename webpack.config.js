const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

// Common Config
const config = {
  mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

// Dev Config (for local testing)
if (mode === 'development') {
  const HTMLWebpackPlugin = require('html-webpack-plugin');

  config.entry = './dev/index.js';

  config.plugins = [
    new HTMLWebpackPlugin()
  ];

  config.devServer = {
    open: true
  };
}

// Production Config (for publishing to NPM)
if (mode === 'production') {
  const path = require('path');

  config.entry = './src/index.js';

  config.output = {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'react-seven-segment-display.min.js',
    library: 'reactSevenSegmentDisplay',
    libraryTarget: 'umd'
  };

  config.externals = { react: 'React' };
}

module.exports = config;
