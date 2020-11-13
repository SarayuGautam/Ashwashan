var express = require("express");
var router = express.Router();

const {
  addArticles,
  getArticles,
  getAArticle,
} = require("../controllers/articles.controller");

const { catchErrors } = require("../handlers/error_handler");

router.post("/addAllArticles", catchErrors(addArticles));
router.get("/allArticles", catchErrors(getArticles));
router.get("/getAArticle", catchErrors(getAArticle));

module.exports = router;
