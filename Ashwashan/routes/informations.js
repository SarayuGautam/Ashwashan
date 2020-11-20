var express = require("express");
var router = express.Router();
const { getQuotes } = require("../controllers/quotes.controller");

const { catchErrors } = require("../handlers/error_handler");

const { getArticles } = require("../controllers/articles.controller");

router.get("/", function (req, res, next) {
  res.render("information");
});

router.get("/articles", catchErrors(getArticles));

router.get("/quotes", catchErrors(getQuotes));

module.exports = router;
