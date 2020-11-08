var express = require("express");
var router = express.Router();

/* GET users listing. */
const router = require("express").Router();

const {
  signup,
  login,
  getMyProfile,
} = require("../controllers/user.controller");
const { catchErrors } = require("../handlers/error_handler");
const auth = require("../middleware/auth");

router.post("/users/login", catchErrors(login));
router.post("/users/signup", catchErrors(signup));

router.get("/users/me", auth, catchErrors(getMyProfile));

module.exports = router;
