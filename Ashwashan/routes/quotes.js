var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");

const { getQuotes } = require("../controllers/quotes.controller");

const { catchErrors } = require("../handlers/error_handler");

router.get("/all", auth, catchErrors(getQuotes));

module.exports = router;
