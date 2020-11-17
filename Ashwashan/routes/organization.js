var express = require("express");
var router = express.Router();

const { getOrganizations } = require("../controllers/organization.controller");

const { catchErrors } = require("../handlers/error_handler");

router.get("/", function (req, res, next) {
  res.render("collective_org");
});

router.get("/:category", catchErrors(getOrganizations));

module.exports = router;
