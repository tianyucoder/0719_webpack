/*
* 注意！！！
*   该index.js不同于学习模块化时，那个用于汇总js的文件。
*   模块化技术的index.js只用于汇总各个js模块。
*   该index.js是webpack的【入口文件】
*   该文件可以用于汇总：js、css、json、图片、音频、视频
* */
import {sum} from './module1'
import {sub} from './module2'
import module3 from './module3'
import a from '../json/test.json'

console.log(sum(1, 2));
console.log(sub(3, 4));
console.log(module3.mul(5,6));
console.log(module3.div(10,5));
console.log(a,typeof a)

//webpack只管翻译es6的模块语法变为浏览器认识的，但是不会处理其他新语法
setTimeout(()=>{
    console.log('定时器到点了')
},1000)
