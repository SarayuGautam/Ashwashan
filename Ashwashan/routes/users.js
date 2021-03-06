var express = require("express");
var router = express.Router();

/* GET users listing. */

const {
  signup,
  login,
  getMyProfile,
  logOut,
} = require("../controllers/user.controller");
const { catchErrors } = require("../handlers/error_handler");
const auth = require("../middleware/auth");
router.get("/logout", auth, catchErrors(logOut));
router.post("/login", catchErrors(login));
router.post("/signup", catchErrors(signup));
router.get("/me", auth, catchErrors(getMyProfile));

module.exports = router;
