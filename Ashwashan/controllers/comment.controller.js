const Comment = require("../models/Comment");
const shuffle = require("../helpers/array.suffle");

exports.addComment = async (req, res) => {
  const { commentBody } = req.body;
  const userId = req.user._id;
  const postId = req.params.id;

  const comment = new Comment({
    commentBody,
    userId,
    postId,
  });
  await comment.save();
  return res.json({
    comment,
  });
};
