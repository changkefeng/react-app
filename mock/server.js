/**
 * Created by haoxiao on 2017-05-30.
 */
let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad');
//广告接口
app.get('/api/ad',(req,res)=>{
    res.send(ad);
});
//fetch(url,{
//  Accept:'application/json'
// }).then(res=>res.json()).then(data=>{
//  console.log(data)
// })
let list = require('./home/list');
app.get('/api/list/:city/:page',function (req,res) {
    console.log(req.params);
    res.send(list)
});
