const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'), //打包到哪个文件夹，在当前目录下，在去找dist
    publicPath:path.resolve(__dirname, 'dist'), //指定字体文件去哪里找
    filename: 'js/app.js'
  },
  module: {
	  rules: [
	  //jsx
	    {
	      test: /\.jsx$/,
	      exclude: /(node_modules|bower_components)/,//对着里面的文件不做处理
	      use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['env','react']//自动鉴别浏览器环境或者node环境
	          }
	      }
	    },
	    //css文件的处理
	    {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	        })
        },
        //sass 文件的处理
        {
        	test: /\.scss$/,
            use: extractSass.extract({
                use: ["css-loader","sass-loader"],
                // 在开发环境使用 style-loader
                fallback: "style-loader"
            })
        },
        //图片的处理url-loader
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'resource/[name].[ext]'
                }
              }
            ]
       },
       //字体
       {
            test: /\.(svg|eot|ttf|woff|woff2|otf)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'resource/[name].[ext]'
                }
              }
            ]
       }
	  ]
  },
  resolve: {
        /*
         * 别名配置，配置之后，可以在别的js文件中直接使用require('d3')，将导入的文件作为一个模块导入到你需要的项目中，不用配置别也可会当作模块导入项目中，只是你要重复写路径而已。
         * */
        alias: {
            '@': path.resolve(__dirname, 'src/components'),
        }
    },　　
  plugins: [
  //处理html文件
	  new HtmlWebpackPlugin({
	  	template: './src/template/index.html',
      hash: false,
	  }),
    //独立css文件 
	  new ExtractTextPlugin("css/[name].css"),
    //提出公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name:'common',
      filename:'js/base.js'
    })

  ],
  devServer: {
     port:8989,
     contentBase: './dist/'
   }
};