const { render } = require('ejs');
var express = require('express');
var router =express.Router();
var mysql =require('mysql');

var connection = mysql.createConnection({
    host:'localhost',//主机地址
    user:'root',
    port:'3306',
    password:'1234',
    database:'yyf',
});

// connection.connect(function(err){
//     if(err){
//         console.error('error connecting:'+err.stack);
//         return;
//     }
//     console.log()
// });

var sql ='SELECT name,possword,type from tab_creat';
connection.query(sql,function(error,results,fields){
    
    if(error){
        console.log('[query]-:'+error);
    }else{
        console.log(results);
       router.get('/',(req,res,next)=>{
    res.render('5.html',{
        data:results
    });
}) 
    }
});


module.exports = router;