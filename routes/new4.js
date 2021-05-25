const { render } = require('ejs');
var express = require('express');
var router =express.Router();

router.get('/',(req,res,next)=>{
    res.render('4.html');
})
router.post('/',(req,res)=>{
    
})

module.exports = router;