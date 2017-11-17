
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
       //.css �ļ�ʹ�� style-loader �� css-loader ������
      { test: /\.css$/, loader: "style!css" },
      //.js �ļ�ʹ�� jsx-loader �����봦��
      { test: /\.js$/,    loader: "jsx-loader" }
    ]
  },
  
  plugins: []
};