const express = require("express");

const router = express.Router();

const {
  addComment,
  getAllComments,
} = require("../controllers/comment.controller");

const { catchErrors } = require("../handlers/error_handler");

const auth = require("../middleware/auth");

router.post("/add", auth, catchErrors(addComment));

router.get("/all", catchErrors(getAllComments));

module.exports = router;
