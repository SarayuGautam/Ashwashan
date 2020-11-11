var express = require('express');
var router = express.Router();

/* GET home page. */ //login page
router.get('/',(req, res)=> {
  res.render('index', { title: 'Login' });
});

//regist page
router.get('/signup',(req, res)=> {
  res.render('signup');
})
module.exports = router;
