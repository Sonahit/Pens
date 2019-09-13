const merge = require("webpack-merge");
const base = require("./webpack.base.conf");

const prod = merge(base, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    moduleIds: "hashed",
    minimize: true,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
});

module.exports = prod;
