const { render } = require('ejs');
var express = require('express');
var router =express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',//主机地址
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'yyf',
});

router.get('/',(req,res,next)=>{
    var sql = 'SELECT * from tab_from';
    connection.query(sql, function (error, results, fields) {

        if (error) {
            console.log('[query]-:' + error);
        } else {
            console.log(results);
            res.render('2.html', {
                data: results
            });
        }
    });
});
router.get('/deta/:id', (req, res) => {
    var dalete_ = "DELETE FROM tab_from WHERE id =?"
    connection.query(dalete_, [req.params.id], (error, results, fields) => {
        if (error)
            return console.error(error.message);
        console.log('Deleted Row(s):', results.affectedRows);
        res.redirect('/new2');
    })
});//删除
module.exports = router;