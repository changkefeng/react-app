/**
 * Created by haoxiao on 2017-05-30.
 */
let htmlPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry:'./app/index.js',
    output:{
        filename:"bundle.js",
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins:[
        new htmlPlugin({
            template:'./app/index.html'
        })
    ],
    devtool:'source-map',
    devServer:{
        proxy:{
            '/api':'http://localhost:3000'
        }
    }
};