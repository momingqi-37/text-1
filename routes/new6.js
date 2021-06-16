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

router.get('/:name',(req,res,next)=>{
    var sql ="SELECT * FROM `tab_creat`where name = ?";
    connection.query(sql,[req.params.name],(err,rows)=>{
        if (err) throw err;
        console.log(rows);
        res.render('6.html',{obj:rows});
    });
});

module.exports =router;