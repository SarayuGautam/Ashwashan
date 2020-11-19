var express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");

const { getOrganizations } = require("../controllers/organization.controller");

const { catchErrors } = require("../handlers/error_handler");

router.get("/", auth, function (req, res, next) {
  res.render("collective_org");
});

router.get("/:category", auth, catchErrors(getOrganizations));

module.exports = router;
