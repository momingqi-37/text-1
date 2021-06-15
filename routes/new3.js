const { render } = require('ejs');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',//主机地址
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'yyf',
});

router.get('/', (req, res, next) => {
    var sql2 = "select * from tab_creat where name =?"
    connection.query(sql2,(err,[],rows)=>{
        if (err) throw err;
        console.log(rows);
        res.render('3.html',{obj:rows});
    })
    
});9
router.post('/',(req,res,next)=>{
    var sql3 ="insert into tab_from(name,destination,data_in,data_out,rooms,man,kid) VALUES(?,?,?,?,?,?,?);"
    var ARR=[
        req.body.name,
        req.body.destination,
        req.body.check_in,
        req.body.check_out,
        req.body.room,
        req.body.adult,
        req.body.children    
    ]
    connection.query(sql3,ARR,(err,rows)=>{
        if (err) throw err ;
        console.log(rows);
    res.json("发布成功");
     })
})


module.exports = router;