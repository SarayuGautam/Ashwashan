var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
const saltRounds = 10;

//login handle
router.get('/login',(req, res)=> {
  res.render('login');
});

router.get('/signup',(req, res)=> {
  res.render('singup');
});

//This is singup handle to conform for this web application to performa console log
  router.post('/signup', async (req, res) => {
    console.log(req.body);
    try {
      const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
      const insertResult = await User.create({
        username: req.body.username,
        email:req.body.email,
        phoneno:req.body.phoneno,
        password: hashedPwd,
      });
      res.send(insertResult);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
  });

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      console.log(user);
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions
          res.send("Auth Successful");
        } else {
          res.send("Wrong username or password.");
        }
      } else {
        res.send("Wrong username or password.");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
});

//logout
router.get('/logout',(req,res)=>{

})
module.exports = router;
