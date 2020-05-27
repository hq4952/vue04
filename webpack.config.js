const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/main.js'
  },
  module:{
      rules:[
        {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,

                name:"[hash:8].[ext]"
              }
            }
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
  },
  plugins:[
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
        filename: 'hq.html'
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
  ],
  devServer:{
    port:8080,
    // contentBase: path.join(__dirname, 'dist'),
    open:true,
    quiet:true,
    hot:true
  },
  mode:"development"
};