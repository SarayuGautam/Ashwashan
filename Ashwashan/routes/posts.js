const express = require("express");

const router = express.Router();

const { addPost, getPost } = require("../controllers/post.controller");
const { catchErrors } = require("../handlers/error_handler");

const auth = require("../middleware/auth");

router.post("/add", auth, catchErrors(addPost));

router.get("/:_id", catchErrors(getPost));

module.exports = router;
