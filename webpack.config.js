const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const bundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  mode: "development",
  //------------------- In order to make code spliting you can pass a object to entry
  entry: { bundle: path.resolve(__dirname, "src/index.tsx") },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    //----------------- If you pass a [name].js to file name it will take the name of entry key name
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: "/node_modules/",
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // In order to our code to be compatible with older browser we install babel and it's related dependencies and configure it in rules section
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // In order to our typescript code to be compatible with older browser we install babel and it's related dependencies and configure it in rules section
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      // This rule configs the webpack asset loader for serving img files
      {
        test: /\.(png|jpg|jpeg|svg|ttf)$/i,
        type: "asset/resource",
      },
    ],
  },
  // for mapling the errors in code to show us the exact line of error set devtool to source-map
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  // --------------------- In order to dynamically generate a html we you html webpack plugin with its options
  plugins: [
    new htmlWebpackPlugin({
      title: "Webpack App template",
      filename: "index.html",
      template: "src/index.html",
    }),
    //  new bundleAnalyzer(),
  ],
};
