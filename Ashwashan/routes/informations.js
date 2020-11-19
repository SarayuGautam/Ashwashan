var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");

router.get("/", auth, function (req, res, next) {
  res.render("information");
});

module.exports = router;
