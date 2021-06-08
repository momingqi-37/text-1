const { render } = require('ejs');
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
    var sql ="SELECT * FROM `tab_creat`INNER JOIN tab_text ON tab_creat.id =tab_text.user_id ";
    connection.query(sql,(err,rows)=>{
        if (err) throw err;
        console.log(rows);
        res.render('1.html',{obj:rows});
    });
});

module.exports =router;