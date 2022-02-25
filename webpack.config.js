const path = require("path");
const postcssPlugins = [];

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "app"),
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            option: { postcssOptions: { plugins: postcssPlugins } },
          },
        ],
      },
    ],
  },
};
