var express = require("express");
var router = express.Router();

const { getQuotes } = require("../controllers/quotes.controller");

const { catchErrors } = require("../handlers/error_handler");

router.get("/all", catchErrors(getQuotes));

module.exports = router;
