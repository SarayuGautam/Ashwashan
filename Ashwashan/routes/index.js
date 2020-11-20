var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");

/* GET home page. */
router.get("/", auth, function (req, res, next) {
  res.render("index");
});

module.exports = router;
