import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

const serverConfig = {
  entry: SRC_DIR + '/server.js',

  output: {
    path: BUILD_DIR,
    filename: 'server.bundle.js',
    sourceMapFilename: 'server.js.map',
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

export default serverConfig;
