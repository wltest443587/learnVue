const path = require('path')

module.exports = {
    // 入口。可以是字符串、数组、对象
    entry: './main.js',
    // 出口，一般是一个对象，包含path、filename这两个参数。
    output: {
        path: path.resolve(__dirname,'dist'),   // 动态的获取路径
        filename: 'bound.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件进行加载，不负责解析
                // loader负责将模块的导出作为样式添加到 DOM 中
                use: [ 'style-loader','css-loader' ]
            }
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    }
}

//require('./css/noamal.css')