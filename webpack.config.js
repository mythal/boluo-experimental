// https://webpack.js.org/guides/
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const rootPath = path.resolve(__dirname);
const PRODUCTION = process.env.NODE_ENV === 'production';
const REMOTE_BACKEND = Boolean(process.env.REMOTE_BACKEND) || false;

module.exports = {
  entry: './src/index.tsx',

  // https://webpack.js.org/configuration/devtool/
  devtool: PRODUCTION ? 'source-map' : 'eval-cheap-module-source-map',
  mode: PRODUCTION ? 'production' : 'development',

  output: {
    filename: 'main.[contenthash].js',
    chunkFilename: '[id].[contenthash].js',
    path: path.resolve(rootPath, 'dist'),
    publicPath: '/',
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'public/index.hbs'),
      inject: false,
      favicon: path.resolve(rootPath, 'src/assets/development-favicon.svg'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],

  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(rootPath, 'public'),
    // static: [
    //   path.resolve(rootPath, 'public')
    // ],
    // proxy: {
    //   '/api': {
    //     target: REMOTE_BACKEND ? 'https://boluo.chat' : 'http://127.0.0.1:3000',
    //     ws: true,
    //     secure: false,
    //   },
    // },
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.wasm'],
  },

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      { test: /\.(png|jpe?g|gif)$/, use: ['file-loader'] },
    ],
  },

  externals: PRODUCTION
    ? {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    : {},

  optimization: {
    minimize: PRODUCTION,
    splitChunks: {
      chunks: 'all',
      minSize: 1000000,
    },
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
