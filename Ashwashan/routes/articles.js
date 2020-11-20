var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");

const { getArticles } = require("../controllers/articles.controller");

const { catchErrors } = require("../handlers/error_handler");

router.get("/all", auth, catchErrors(getArticles));

module.exports = router;
