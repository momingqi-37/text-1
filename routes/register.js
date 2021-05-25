var express = require('express');
var router = express.Router();
var mysql =require('mysql');
var crypto =require('crypto');

var connection = mysql.createConnection({
    host:'localhost',//主机地址
    user:'root',
    port:'3306',
    password:'1234',
    database:'yyf',
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/', (req, res) =>{
 //获取前端信息，保存到session，判断
//  req.session.uname = req.body.uname ;
//  req.session.password = req.body.password ;
var repeaded ="select name from tab_creat where name = '"+req.body.name+"'"
connection.query(repeaded,(err,rows1)=>{
  //判断用户名是否重复
  // if(rows1==""){}
    let md5 = crypto.createHash("md5");
    let newPas = md5.update(req.body.password).digest("hex");//加密
    var mysqlparams=[
         req.body.uname,
  newPas
];
var mysqlQuery ='INSERT INTO tab_creat(name,possword,type) values(?,?,1)'
connection.query(mysqlQuery,mysqlparams,(err,rows)=>{
  if(err) throw err;
    console.log(rows);
});
res.redirect('/');
 } 
  // else{
  //   res.send(console.log("用户名重复"));//用户名重复？？
  // }
)
//添加
 
});
module.exports = router;
