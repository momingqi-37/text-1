var express =require('express');
var router =express.Router();
var mysql =require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',//主机地址
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'yyf',
});

router.get('/',(req,res,next)=>{
    
    connection.query()
    res.render('1.html');
})

module.exports =router;