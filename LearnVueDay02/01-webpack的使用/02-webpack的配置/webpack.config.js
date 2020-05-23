const path = require('path')

module.exports = {
    // 入口。可以是字符串、数组、对象
    entry: './src/main.js',
    // 出口，一般是一个对象，包含path、filename这两个参数。
    output: {
        path: path.resolve(__dirname,'dist'),   // 动态的获取路径
        filename: 'bound.js'
    }
}