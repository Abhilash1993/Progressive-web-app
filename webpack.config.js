const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      /* Style loader **/
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader']
      },

      { test: /\.(jpe?g|png|gif|svg)$/i, use: ['url-loader?limit=10000!img?progressive=true'] },

      /* Font Files **/
      {
          test: /\.(woff|woff2|eot|ttf|svg|otf)(\?\S*)?$/,
          exclude: /node_modules/,
          use: ['url-loader?limit=1024&name=[path][name].[ext]']
      },
    ]
  },
  // postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname),
    publicPath: '/dist/',
    historyApiFallback: true,
    noInfo: true,
    allowedHosts:['172.16.1.20']
  }
};

// "style-loader!css-loader?localIdentName=[path][name]__[hash:base64:5]__[local]!less-loader
