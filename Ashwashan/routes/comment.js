const express = require("express");

const router = express.Router();

const { auth } = require("../middleware/auth");

const {
  addComment,
  getAllComments,
} = require("../controllers/comment.controller");

const { catchErrors } = require("../handlers/error_handler");

router.post("/add", auth, catchErrors(addComment));

router.get("/all", catchErrors(getAllComments));

module.exports = router;
