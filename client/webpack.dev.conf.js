const merge = require("webpack-merge");
const base = require("./webpack.base.conf");

const dev = merge(base, {
  mode: "development",
  devtool: "eval-source-map"
});

module.exports = dev;
