import webpack from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
    ]
  },

  // plugins: [
  //   new CopyWebpackPlugin([
  //     { from: SRC_DIR + '*.html', to: BUILD_DIR },
  //   ], {
  //     copyUnmodified: true,
  //   })
  // ],

};

const clientConfig = {
  ...config,

  entry: SRC_DIR + '/client.jsx',

  output: {
    path: BUILD_DIR,
    filename: 'client.bundle.js',
  },

  devServer: {
    contentBase: BUILD_DIR,
  },

};

const serverConfig = {
  ...config,

  entry: SRC_DIR + '/server.js',

  output: {
    path: BUILD_DIR,
    filename: 'server.bundle.js',
  },

  target:'node', // It is necessary to prevent errors using express (?) on the server

};

export default [clientConfig, serverConfig];
