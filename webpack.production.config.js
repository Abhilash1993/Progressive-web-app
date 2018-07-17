const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const banner = ''+Date.now();
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    bundle: "./index.jsx"
  },
  output: {
    path: path.join(__dirname, 'dist'),
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
        use: ExtractTextPlugin.extract({use:['css-loader', 'less-loader'], fallback:"style-loader"})
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      { test: /\.(jpe?g|png|gif|svg)$/i, use: ['url-loader?limit=10000!img?progressive=true'] },

      /* Font Files **/
      {
          test: /\.(woff|woff2|eot|ttf|svg|otf)(\?\S*)?$/,
          exclude: /node_modules/,
          use: ['url-loader?limit=1024&name=[path][name].[ext]']
      }
    ],
  },
  // postcss: [ autoprefixer({ browsers: ['last 3 versions', '> 1%'] }) ],
  plugins: [
    new webpack.BannerPlugin(banner),
    new ExtractTextPlugin("style.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

// "style-loader!css-loader?localIdentName=[path][name]__[hash:base64:5]__[local]!less-loader
