var express = require("express");
var router = express.Router();

const { getOrganizations } = require("../controllers/organization.controller");

const { catchErrors } = require("../handlers/error_handler");

router.get("/:category", catchErrors(getOrganizations));

module.exports = router;
