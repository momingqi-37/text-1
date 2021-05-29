const { render } = require('ejs');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var crypto =require('crypto');

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
    var sql = 'SELECT * from tab_creat';
    connection.query(sql, function (error, results, fields) {

        if (error) {
            console.log('[query]-:' + error);
        } else {
            console.log(results);
            router.get('/', (req, res, next) => {
                res.render('5.html', {
                    data: results
                });
            })
        }
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
    var sql = 'INSERT INTO tab_creat(name,possword,type) vauls(?,?,?)';
    connection.query(sql, mysql2, (error, results) => {
        if (error) { console.log('[query]-:' + err) };
        console.log("add yes"+results);
    })
    res.redirect('/new5');
})

module.exports = router;