var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var mysql = require('mysql');

router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/login', (req, res) => {
  // if(req.session.uname ==req.body.uname && req.session.password ==req.body.password){
  //   res.render('1.html');
  // }else{
  //   res.json('没有账号或密码错误，登陆失败')
  // } 
  var connection = mysql.createConnection({
    host: 'localhost',//主机地址
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'yyf',
  });

  connection.connect();
  let md5 = crypto.createHash("md5");
  let newPas = md5.update(req.body.password).digest("hex");//加密
  var mysqlQuery = "select * from tab_creat where name='" + req.body.uname + "'and possword ='" + newPas + "'";
  connection.query(mysqlQuery, (err, rows) => {

    if (err) {
      console.log('[query]-:' + err);
    }
    else {
      console.log(rows);
      if (rows.length == 0) {
        res.json('账号或密码错误，登陆失败');
      }
      else {
        if (rows[0].type == '0') {
          res.redirect('/new5');
        }
         else if(rows[0].type == '2'){
          res.redirect('/new2');
         }
        else {console.log(rows);
          res.render('3.html',{obj:rows});
        }
      }
    }

  }); connection.end();
});



module.exports = router;
