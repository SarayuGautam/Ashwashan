var express = require("express");
var router = express.Router();

const { addQuotes, getQuotes } = require("../controllers/quotes.controller");

const { catchErrors } = require("../handlers/error_handler");

router.post("/addAllArticles", catchErrors(addQuotes));
router.get("/allArticles", catchErrors(getQuotes));

module.exports = router;
