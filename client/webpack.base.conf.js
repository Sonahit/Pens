const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const BUILD_BASE = path.resolve(__dirname, "./dist");
const config = require("./config/config");

const baseConfig = {
  mode: "none",
  entry: {
    app: path.resolve(__dirname, "./src/index.js")
  },
  output: {
    filename: config.isProduction ? "[name].[contenthash].bundle.js" : "[name].bundle.js",
    path: BUILD_BASE
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s[ac]ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "./src/assets/sass"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      hash: config.isProduction,
      template: path.resolve(__dirname, "./public/index.html"),
      inject: true
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = baseConfig;
