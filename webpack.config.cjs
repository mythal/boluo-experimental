const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const rootPath = path.resolve(__dirname);

const NODE_ENV = process.env.NODE_ENV || 'production';
const BACKEND = process.env.BACKEND || 'https://boluo.chat';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(rootPath, 'src/index.html'),
  }),
  new webpack.EnvironmentPlugin({
    NODE_ENV: process.env.NODE_ENV || 'development',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  }),
];

if (process.env.ANALYZE) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin());
}

if (process.env.NODE_ENV === 'development') {
  const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  entry: './src/index.tsx',
  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map',
  mode: NODE_ENV === 'production' ? 'production' : 'development',

  output: {
    filename: '[contenthash].js',
    sourceMapFilename: '[contenthash].js.map',
    chunkFilename: '[id].[contenthash].js',
    path: path.resolve(rootPath, 'dist'),
    publicPath: '/',
  },

  plugins,

  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    static: [path.resolve(rootPath, 'src/assets')],
    open: ['/'],
    proxy: {
      '/api': {
        target: BACKEND,
        ws: true,
        secure: false,
      },
    },
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.wasm'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', { loader: 'css-loader' }],
      },
      { test: /\.(png|jpe?g|gif|svg)$/, type: 'asset/resource' },
    ],
  },

  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 1000000,
    },
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
