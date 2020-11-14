var express = require("express");
var router = express.Router();

const {
  getArticles,
  getAArticle,
} = require("../controllers/articles.controller");

const { catchErrors } = require("../handlers/error_handler");

router.get("/all", catchErrors(getArticles));
router.get("/:id", catchErrors(getAArticle));

module.exports = router;
