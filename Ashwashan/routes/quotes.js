var express = require("express");
var router = express.Router();

const { addQuote, getQuotes } = require("../controllers/quotes.controller");

const { catchErrors } = require("../handlers/error_handler");

router.post("/addQuote", catchErrors(addQuote));
router.get("/allQuotes", catchErrors(getQuotes));

module.exports = router;
