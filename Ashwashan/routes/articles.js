var express = require("express");
var router = express.Router();

const {
  addArticle,
  getArticles,
  getAArticle,
} = require("../controllers/articles.controller");

const { catchErrors } = require("../handlers/error_handler");

router.post("/addArticle", catchErrors(addArticle));
router.get("/allArticles", catchErrors(getArticles));
router.get("/getAArticle", catchErrors(getAArticle));

module.exports = router;
