import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

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
      title: 'Webpack Boilerplate',
      template: 'src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
  ],

  devServer: {
    contentBase: BUILD_DIR,
  },

};

export default clientConfig;
