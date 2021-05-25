const { render } = require('ejs');
var express = require('express');
var router =express.Router();

router.get('/',(req,res,next)=>{
    res.render('3.html');
})

module.exports = router;