import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const SRC_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'dist/public');

const clientConfig = {
  entry: path.join(SRC_DIR, 'client.js'),

  output: {
    path: PUBLIC_DIR,
    filename: 'client.bundle.js',
    sourceMapFilename: 'client.js.map',
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
        include: path.join(SRC_DIR, 'components'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIR, 'index.html'),
    }),

  ],
  devServer: {
    // This is needed for accessing files in defined folder from inside dev-server
    contentBase: SRC_DIR,
  },

};

export default clientConfig;
