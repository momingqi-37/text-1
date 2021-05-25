var express = require('express');
var router = express.Router();
var crypto=require('crypto')
var mysql =require('mysql');
var connection = mysql.createConnection({
    host:'localhost',//主机地址
    user:'root',
    port:'3306',
    password:'1234',
    database:'yyf',
});


router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/login', (req, res) =>{
// if(req.session.uname ==req.body.uname && req.session.password ==req.body.password){
//   res.render('1.html');
// }else{
//   res.json('没有账号或密码错误，登陆失败')
// } 
 let md5 = crypto.createHash("md5");
let newPas = md5.update(req.body.password).digest("hex");//加密
var mysqlQuery ="select name,possword from tab_creat where name='"+req.body.name+"'and possword ='"+newPas+"'"
connection.query(mysqlQuery,(err,rows)=>{
 
  if(err){
     throw err;
    }
  else if(rows=""){
    res.json('没有账号或密码错误，登陆失败')
   }
   else{
       res.render('1.html');
     }
  });
});
  

 
module.exports = router;
