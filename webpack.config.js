// https://webpack.js.org/guides/
require('dotenv').config();
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

const rootPath = path.resolve(__dirname);

const ANALYZE = Boolean(process.env.ANALYZE) || false;
const PRODUCTION = process.env.NODE_ENV === 'production';
const BACKEND = process.env.BACKEND || 'https://boluo.chat';

const favicon = PRODUCTION ? path.resolve(rootPath, 'src/assets/logo.svg') : path.resolve(rootPath, 'src/assets/development-favicon.svg')

module.exports = {
  entry: './src/index.tsx',
  // https://webpack.js.org/configuration/devtool/
  devtool: PRODUCTION ? 'source-map' : 'eval-cheap-module-source-map',
  mode: PRODUCTION ? 'production' : 'development',

  output: {
    filename: '[contenthash].js',
    sourceMapFilename: "[contenthash].js.map",
    chunkFilename: '[id].[contenthash].js',
    path: path.resolve(rootPath, 'dist'),
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),
    PRODUCTION ? false : new ReactRefreshWebpackPlugin(),
    new SpriteLoaderPlugin(),
    PRODUCTION && ANALYZE && new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'src/index.hbs'),
      templateParameters: {
        PRODUCTION,
      },
      inject: false,
      favicon,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
      DEBUG: !PRODUCTION,
      SENTRY_DSN: process.env.SENTRY_DSN || '',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    PRODUCTION && process.env.SENTRY_AUTH_TOKEN && new SentryWebpackPlugin({
      // sentry-cli configuration
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "mythal",
      project: "boluo-experimental",

      // webpack specific configuration
      include: ".",
      ignore: ["node_modules", "webpack.config.js"],
    }),
  ].filter(Boolean),

  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(rootPath, 'public'),
    // static: [
    //   path.resolve(rootPath, 'public')
    // ],
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
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.(ts|js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: PRODUCTION ? [] : ["react-refresh/babel"],
            },
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: !PRODUCTION,
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: '[hash].svg',
        },
      },
      { test: /\.(png|jpe?g|gif)$/, use: ['file-loader'] },
    ],
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  optimization: {
    minimize: PRODUCTION,
    splitChunks: {
      chunks: 'all',
      minSize: 1000000,
    },
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
