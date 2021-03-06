const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";
}

if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  // This is unnecessary in Webpack 5, because it's the default.
  // However, react-refresh-webpack-plugin can't find the entry without it.
  entry: "./src/index.js",

  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
          options: {
            /**
             * From the docs: When set, the given directory will be used
             * to cache the results of the loader. Future webpack builds
             * will attempt to read from the cache to avoid needing to run
             * the potentially expensive Babel recompilation process on each run.
             */
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
