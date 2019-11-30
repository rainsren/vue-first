var http = require('http')

var fun1 = require('./fun1');
var fun2 = require('./fun2');

// 1. 创建 Server
var server = http.createServer()

// 2. 监听 request 请求事件，设置请求处理函数
server.on('request', function (req, res) {
  console.log('收到请求了，请求路径是：' + req.url)
  console.log('请求我的客户端的地址是：', req.socket.remoteAddress, req.socket.remotePort)
  var url = req.url
  res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
  if (url === '/') {
    res.end('<h1>fun1'+fun1.add(5,8)+'</h1>')
  } else if (url === '/login') {
    res.end('<h1>fun2'+fun2.print()+'</h1>')
  } else {
    res.end('404 Not Found.')
  }
})

// 3. 绑定端口号，启动服务
server.listen(8888, function () {
  console.log('服务器启动成功，可以访问了。。。')
})