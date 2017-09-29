import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {};

const clientConfig = {
  entry: SRC_DIR + '/client.js',

  output: {
    path: BUILD_DIR,
    filename: 'client.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.scss?$/,
        include: SRC_DIR + '/components',
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Boilerplate (+ejs)',
      template: 'src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
  ],

  devServer: {
    contentBase: BUILD_DIR,
  },

};

const serverConfig = {
  entry: SRC_DIR + '/server.js',

  output: {
    path: BUILD_DIR,
    filename: 'server.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
    ]
  },

  target: 'node', // It is necessary to prevent errors using express (?) on the server
  externals: [nodeExternals()], // In order to ignore all modules in node_modules folder

};

export default [clientConfig, serverConfig];
