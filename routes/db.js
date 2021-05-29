
var mysql =require('mysql');

var db ={}

db.query=function(sql,callback){
    var connection = mysql.createConnection({
    host:'localhost',//主机地址
    user:'root',
    port:'3306',
    password:'1234',
    database:'yyf',
});
connection.query(sql,(err,results)=>{
    callback(err,results);
})

connection.end();
}

module.exports =db;