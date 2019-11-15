const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const BUILD_BASE = path.resolve(__dirname, "./dist");
const config = require("./config/config");
const baseConfig = {
	mode: "none",
	entry: {
		app: path.resolve(__dirname, "./src/index.tsx")
	},
	output: {
		filename: config.isProduction ? "[name].[hash].bundle.js" : "[name].bundle.js",
		path: BUILD_BASE
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
			"@public": path.resolve(__dirname, "./public"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"~images": path.resolve(__dirname, "./src/assets/images"),
			"@sass": path.resolve(__dirname, "./src/assets/sass"),
			"@assets": path.resolve(__dirname, "./src/assets")
		}
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: `awesome-typescript-loader`,
					options: {
						configFileName: path.resolve(__dirname, "tsconfig.json"),
						useCache: true,
						useBabel: true,
						babelOptions: {
							babelrc: false,
							presets: ["@babel/preset-env", "@babel/preset-react"]
						},
						babelCore: "@babel/core"
					}
				}
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: config.isProduction,
							reloadAll: true
						}
					},
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.svg$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]"
					}
				}
			},
			{
				test: /\.(png|jpg|gif)$/i,
				include: path.resolve(__dirname, "./src/assets"),
				loader: "url-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: config.isProduction ? "index.prod.html" : "index.html",
			hash: config.isProduction,
			template: path.resolve(__dirname, "./public/index.html"),
			inject: true
		}),
		new MiniCssExtractPlugin({
			filename: config.isProduction ? `css/[name].[hash].css` : `css/[name].css`,
			chunkFilename: config.isProduction ? `css/[id].[hash].css` : `css/[id].css`,
			ignoreOrder: false
		}),
		new CleanWebpackPlugin()
	]
};

module.exports = baseConfig;
