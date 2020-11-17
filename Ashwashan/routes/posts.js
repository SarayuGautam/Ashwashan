const express = require("express");

const router = express.Router();

const {
  addPost,
  getPost,
  getallPosts,
} = require("../controllers/post.controller");
const { catchErrors } = require("../handlers/error_handler");

const auth = require("../middleware/auth");

router.post("/:category/add", auth, catchErrors(addPost));
router.get("/:category/all", catchErrors(getallPosts));
router.get("/:id", catchErrors(getPost));

module.exports = router;
