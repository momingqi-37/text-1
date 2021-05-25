var express =require('express');
var router =express.Router();
var mysql =require('mysql');

var connection = mysql.createConnection({
    host:'localhost',//主机地址
    user:'root',
    port:'3306',
    password:'1234',
    database:'yyf',
});

router.get('/',(req,res,next)=>{
    var dalete_ ="DELETE * FROM tab_creat WHERE id = ?"
    connection.query(dalete_,11,(error,results,fields)=>{
        if(error)
        return console.error(error.message);
        console.log('Deleted Row(s):',results.affectedRows);
        res.render('5.html');
    })
})

module.exports =router;