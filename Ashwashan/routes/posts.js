const express = require("express");

const router = express.Router();

const {
  savePost,
  getPost,
  getallPosts,
} = require("../controllers/post.controller");
const { catchErrors } = require("../handlers/error_handler");

const auth = require("../middleware/auth");

router.get("/", function (req, res, next) {
  res.render("category_support");
});

router.get("/:category/add", function (req, res, next) {
  res.render("share_exp");
});

router.post("/:category/save", auth, catchErrors(savePost));
router.get("/:category/all", catchErrors(getallPosts));
router.get("/:id", catchErrors(getPost));

module.exports = router;
