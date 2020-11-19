const express = require("express");

const router = express.Router();

const {
  savePost,
  getPost,
  getallPosts,
} = require("../controllers/post.controller");

const { addComment } = require("../controllers/comment.controller");

const { catchErrors } = require("../handlers/error_handler");

const auth = require("../middleware/auth");

router.get("/", auth, function (req, res, next) {
  res.render("category_support");
});

router.get("/:category/add", auth, function (req, res, next) {
  res.render("share_exp", {
    category: req.params.category,
  });
});

router.post("/:category/save", auth, catchErrors(savePost));

router.get("/:category/all", auth, catchErrors(getallPosts));

router.get("/:id", auth, catchErrors(getPost));

router.post("/:id/add", auth, catchErrors(addComment));

module.exports = router;
