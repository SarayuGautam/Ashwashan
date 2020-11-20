var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.render("index");
});

module.exports = router;
