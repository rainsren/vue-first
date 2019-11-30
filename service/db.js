var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ran8077989',
  database : 'hello'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

function loginAdmin(name,password)
{
  sql="select * from admins where name="+name+"and password="+password;
  connection.query(sql, function (error, data) {
    console.log(error);
    if (error) {
        var result = {
            "status": "500",
            "message": "服务器错误"
        }
        return false;
    }
    else{
        var result = {
            "status": "200",
            "message": "success",
            data:data
        }
        return true;
    }
  })
  return false;
}
module.exports = {
  loginAdmin,
}

/*mysql 报错Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client 起因：mysql8.0加密方式的原因报错。
解决办法：
执行指令
mysql -u root -p
123456
use mysql;
alter user 'root'@'localhost' identified with mysql_native_password by '123456';
flush privileges;
注意：123456是我自己连接数据库的密码哈*/
