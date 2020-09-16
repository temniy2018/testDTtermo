const path = require("path");
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
const reStyle = /\.(css|scss)$/;

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        },
        {
            test: /\.scss$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test: reImage,
            oneOf: [
              {
                issuer: reStyle,
                oneOf: [
                  {
                    test: /\.svg$/,
                    loader: 'svg-url-loader',
                    options: {
                      limit: 4096, 
                    },
                  },
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 4096, 
                    },
                  },
                ],
              },
    
              // Or return public URL to image resource
              {
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      limit: 4096, 
                    },
                  },
                ],
              },
            ],
          },
      ]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
         }),
         new HtmlWebpackPlugin({
            template: "./src/index.html"
          })
      ]
  };