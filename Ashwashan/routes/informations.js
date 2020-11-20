var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");

const { getQuotes } = require("../controllers/quotes.controller");

const { catchErrors } = require("../handlers/error_handler");

const { getArticles } = require("../controllers/articles.controller");

router.get("/", auth, function (req, res, next) {
  res.render("information");
});

router.get("/articles", auth, catchErrors(getArticles));

router.get("/quotes", auth, catchErrors(getQuotes));

module.exports = router;
