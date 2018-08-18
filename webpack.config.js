
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        },
        {
          test: /\.json$/,
          loader: "json-loader"
        },
        {
          test: /\.css$/,
          loader: "css-loader"
        }
      ]
    }
};
