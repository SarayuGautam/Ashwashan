const express = require("express");

const router = express.Router();

const {
  addPost,
  getPost,
  getallPosts,
} = require("../controllers/post.controller");
const { catchErrors } = require("../handlers/error_handler");

const auth = require("../middleware/auth");

router.post("/add", auth, catchErrors(addPost));
router.get("/all", catchErrors(getallPosts));
router.get("/:id", catchErrors(getPost));

module.exports = router;
