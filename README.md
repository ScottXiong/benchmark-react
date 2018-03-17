### webpack document
[中文文档](https://doc.webpack-china.org/concepts/),webpack最核心的四个部分，用好了就可以跑起来了
- 入口(entry)
- 输出(output)
- loader
- 插件(plugins)
```
3步搞定webpack
项目目录下
1， yarn add webpack@3.10.0 --dev
2， touch webpack.config.js //编写配置文件
const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  }
};

3，node_modules/.bin/webpack //编译打包
```

### 添加插件

```
//支持自动创建html
yarn add html-webpack-plugin@2.30.1 --dev

```
### es6 support
```
yarn add babel-core@6.26.0 babel-preset-env@1.6.1 babel-loader@7.1.2 --dev
```
### support react
```
yarn add babel-preset-react@6.24.1 --dev
yarn add react@16.2.0 react-dom@16.2.0
```
### 支持样式
```
yarn add style-loader@0.19.1 css-loader@0.28.8 --dev
yarn add extract-text-webpack-plugin@3.0.2 --dev
//支持sass
yarn add sass-loader@6.0.6 node-sass@4.7.2 --dev
```
### 支持图片url-loader
```
url-loader依赖file-loader
yarn add url-loader@0.6.2 file-loader@1.1.6 --dev
```
### 支持字体
```
 yarn add font-awesome
 
```
###  支持server
```
yarn add webpack-dev-server@2.9.7 --dev
```
## other reference
- [tuturial](http://blog.csdn.net/sinat_17775997/article/details/61424829)
