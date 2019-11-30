var express = require('express');
var app = express();
var session = require("express-session");
app.use(session({
        secret:'this is a string key',//加密的字符串，里面内容可以随便写
        resave:false,//强制保存session,即使它没变化
        saveUninitialized:true //强制将未初始化的session存储，默认为true
    }))
var bodyParser = require('body-parser');
//只要加入这个配置，在req请求对象上会多出来一个属性
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())
var fun1 = require('./fun1');
var fun2 = require('./fun2');
var apia = require('./apia');
// GET 请求
app.get('/api/', function (req, res) {
   console.log("GET 请求");
   res.send('fun1'+fun1.add(5,8)+'Hello，我是GET请求');
})

// POST 请求
app.post('/api/', function (req, res) {
   console.log("POST 请求");
   res.send('Hello，我是 POST 请求');
})

// POST 请求
app.post('/api/login', function (req, res) {
   console.log(req.body);
   if(req.body.name==req.session.name&&req.session.witch==req.body.witch){
      res.send('已经登陆');
      return;
   }
   if(apia.login(req.body.name,req.body.password,req.body.witch)==true){
      req.session.name=req.body.name;
      req.session.witch=req.body.witch;
      res.send('登陆成功');
      return;
   }
   req.session.destroy();
   res.send('登陆失败');
})
// GET 请求
app.get('/api/list', function (req, res) {
   console.log(req.body);
   if(req.session==null)
   {
      res.send('没有登陆');
      return;
   }

   if(req.body.list=="managers"){
      if(req.session.witch=="admin"){
         pageindex=apia.showmanagers(req.body.pageindex);
         res.send('managers'+pageindex);
         return;
      }
   }else if(req.body.list=="villages"){
      if(req.session.witch=="admin"||req.session.witch=="manager"){
         pageindex=apia.showvillages(req.body.pageindex);
         res.send('villages'+pageindex);
         return;
      }
   }else if(req.body.list=="devices"){
      if(req.session.witch=="admin"||req.session.witch=="manager"||req.session.witch=="vilage"){
         pageindex=apia.showdevices(req.body.pageindex);
         res.send('devices'+pageindex);
         return;
      }
   }else if(req.body.list=="users"){
      if(req.session.witch=="admin"||req.session.witch=="manager"||req.session.witch=="vilage"){
         pageindex=apia.showusers(req.body.pageindex);
         res.send('users'+pageindex);
         return;
      }
   }else if(req.body.list=="uids"){
      if(req.session.witch=="vilage"){
         pageindex=apia.showuids(req.body.pageindex);
         res.send('uids'+pageindex);
         return;
      }
   }else if(req.body.list=="ctrls"){
      if(req.session.witch=="user"){
         pageindex=apia.showctrls(req.body.pageindex);
         res.send('ctrls'+pageindex);
         return;
      }
   }
   res.send('没有权限');
})
// GET 请求
app.get('/api/websits', function (req, res) {
   console.log("GET 请求");
   res.send('fun1'+fun1.add(5,8)+'Hello，我是GET请求');
})
// /index 响应index页面 GET 请求
app.get('/api/index', function (req, res) {
   console.log("/响应index页面 GET 请求");
   res.send('fun2'+fun2.print()+'Hello，我是 index 页面 GET 请求');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/api/ab*cd', function(req, res) {
   console.log("/ab*cd GET 请求");
   res.send('Hello，我是正则匹配');
})

app.listen(8888, function () {
  console.log("服务器启动了");
});