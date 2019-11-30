// 引入 events 模块
var events = require('events');
// 创建 emitter 对象
var emitter = new events.EventEmitter();
//为 connection 事件注册一个监听器
emitter.on('connection', function() {
  console.log('已连接');
});
//一秒后调用监听器
setTimeout(function() {
    emitter.emit('connection');
}, 1000);