const merge = require("webpack-merge");
const base = require("./webpack.base.conf");
const webpack = require("webpack");

const dev = merge(base, {
  mode: "development",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "eval-source-map"
});

module.exports = dev;
