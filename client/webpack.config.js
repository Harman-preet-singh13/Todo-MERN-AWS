const path = require("path");

module.exports = {
  resolve: {
    fallback: {
        util: require.resolve('util/'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
    },
  },
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};
