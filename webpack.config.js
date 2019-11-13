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
  mode: 'production' //配置工作模式
}
