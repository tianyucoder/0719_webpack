/*
* 此文件是webpack的配置文件，用于指定webpack去执行哪些任务
* */
const {resolve} = require('path')

module.exports  = {
  //简化写法
  entry:'./src/js/index.js', //入口
  /*完整写法：
      entry:{
        main:'./src/js/app.js'
      }
    */
  output: {
    path: resolve(__dirname, 'dist/js'), //输出路径
    filename: 'index.js' //输出的文件名
  },
  mode: 'production', //配置工作模式

  /*所有的laoder都要在module对象中的rules属性中
  rules是一个数组，数组中的每一个对象就是一个loader
  loader特点：下载后无需引入，只需声明*/
  module: {
    rules: [
      //解析less(不完美)
      {
        test: /\.less$/, //匹配所有的less文件
        use: [
          'style-loader', //用于在html文档中创建一个style标签，将样式“塞”进去。
          'css-loader', //将less编译后的css转换成为CommonJs的一个模块。
          'less-loader' //将less编译为css，但不生成单独的css文件，在内存中。
        ],
      },
      {
        test: /\.js$/,  //只检测js文件
        exclude: /node_modules/,  //排除node_modules文件夹
        enforce: "pre",  //提前加载使用
        use: { //使用eslint-loader解析
          loader: "eslint-loader"
        }
      }
    ]
  }
}


