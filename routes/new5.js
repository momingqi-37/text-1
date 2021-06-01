const { render } = require('ejs');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var crypto = require('crypto');

var connection = mysql.createConnection({
    host: 'localhost',//主机地址
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'yyf',
});

// connection.connect(function(err){
//     if(err){
//         console.error('error connecting:'+err.stack);
//         return;
//     }
//     console.log()
// });
router.get('/', (req, res, next) => {
    var sql = 'SELECT * from tab_creat';
    connection.query(sql, function (error, results, fields) {

        if (error) {
            console.log('[query]-:' + error);
        } else {
            console.log(results);
            res.render('5.html', {
                data: results
            });
        }
    });
});
router.get('/add', (req, res) => {
    res.render('add');
});
router.post('/add', (req, res) => {
    let md5 = crypto.createHash("md5");
    let newPas = md5.update(req.body.password).digest("hex");//加密
    mysql2 = [
        req.body.name1,
        newPas,
        req.body.name2
    ]
    var sql = 'INSERT INTO tab_creat(name,possword,type) values(?,?,?)';
    connection.query(sql, mysql2, (error, results) => {
        if (error) throw error;
        console.log(results);
    })
    res.redirect('/new5');
});
router.get('/detale/:id', (req, res) => {
    var dalete_ = "DELETE FROM tab_creat WHERE id =?"
    connection.query(dalete_, [req.params.id], (error, results, fields) => {
        if (error)
            return console.error(error.message);
        console.log('Deleted Row(s):', results.affectedRows);
        res.redirect('/new5');
    })
});//删除
router.get('/update/:id', (req, res) => {
    var update_ = "SELECT * FROM tab_creat WHERE id = ?";
    connection.query(update_, [req.params.id], (error, results) => {
        if (error)
            {return console.error(error.message)};
            console.log(results);
        res.render('upda', { 
            obj: results[0] 
        });
    }
);

});
router.post('/update',(req,res)=>{
    let md5 = crypto.createHash("md5");
    let newPas = md5.update(req.body.password).digest("hex");//加密
    var update_2="update tab_creat set name ='"+req.body.name1+"' and possword ='"+newPas+"' where id = ? ";
    connection.query(update_2,[req.params.id],(error,results)=>{
        if (error)
           {return console.error(error.message)} ;
        console.log('Update Row(s):', results.affectedRows);
        res.redirect('/new5');
    });
});
router.post('/cha1',(req,res)=>{
  var mys = "select * from tab_creat where name = ?";
  connection.query(mys,[req.body.cha],(err,results)=>{
      if (err)
      {return console.error(err.message)};
      console.log(results);
      res.render('5.html', {
        data: results
    });
  })
})
    module.exports = router;
