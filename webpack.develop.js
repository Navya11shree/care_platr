const path = require('path');
const commonConfig = require('./webpack.config');

module.exports = {
  ...commonConfig,
  output: {
    ...commonConfig.output,
    publicPath: 'http://localhost:8080/',
  },
  mode: 'development',
  module: {
    rules: [
      ...commonConfig.module.rules,
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
      },
      // Add this rule to handle CSS files
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  devServer: {
    index: 'index.html',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [...commonConfig.plugins],
};