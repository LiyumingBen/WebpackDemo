
var path = require("path");
module.exports = {
  entry: {
	  index: "./src/main.js",
	  react:  "./src/main.js"
  },
  
  output: {
      path: path.resolve(_dirname,'build'),
      filename: "[name].js"
  },
  
  module: {
    loaders: [
       //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: "style!css" },
      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/,    loader: "jsx-loader" }
    ]
  },
  
  plugins: []
};