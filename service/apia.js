var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ran8077989',
  database : 'hello'
});
 
connection.connect();
function loginAdmin(name,password)
{
  sql="select * from admins where name='"+name+"' and password='"+password+"'";
  console.log(sql);
  connection.query(sql, function (error, data) {
    console.log(error);
    if (error) {
        return false;
    }
    else{
        console.log("true:");
        console.log(data);
        return true;
    }
  })
  return false;
}

function loginManager(name,password)
{
  sql="select * from managers where name='"+name+"' and password='"+password+"'";
  connection.query(sql, function (error, data) {
    console.log(error);
    if (error) {
        return false;
    }
    else{
        return true;
    }
  })
  return false;
}

function loginVillage(name,password)
{
  sql="select * from villages where name='"+name+"' and password='"+password+"'";
  connection.query(sql, function (error, data) {
    console.log(error);
    if (error) {
        return false;
    }
    else{
        return true;
    }
  })
  return false;
}

function loginUser(tel,password)
{
  sql="select * from userss where tel='"+tel+"' and password='"+password+"'";
  connection.query(sql, function (error, data) {
    console.log(error);
    if (error) {
        return false;
    }
    else{
        return true;
    }
  })
  return false;
}

function login(name,password,witch){
    if(witch=="admin"){
        let a=loginAdmin(name,password);
        if(a==true) {
            console.log("login true");
            return true;
        }
        console.log("login false");
    }else if(witch=="manager"){
        if(loginManager(name,password)) return true;
    }else if(witch=="village"){
        if(loginVillage(name,password)) return true;
    }else if(witch=="user"){
        if(loginUser(name,password)) return true;
    }
    return false;
}

function showmanagers(pageindex){
    return pageindex;
}

function showvillages(pageindex){
    return pageindex;
}

function showusers(pageindex){
    return pageindex;
}

function showdevices(pageindex){
    return pageindex;
}

function showuids(pageindex){
    return pageindex;
}

function showctrls(pageindex){
    return pageindex;
}

module.exports = {
    login,
    showmanagers,
    showdevices,
    showvillages,
    showusers,
    showuids,
    showctrls
}