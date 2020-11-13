const Comment = require("../models/Comment");
const shuffle = require("../helpers/array.suffle");

exports.addComment = async function (req, res) {
  const { commentBody } = req.body;
  const { postId } = req.params.id;
  const { userId } = req.user;

  const comment = new Comment({
    commentBody,
    postId,
    userId,
  });
  await comment.save();

  res.json({
    comment,
  });
};

exports.getAllComments = async (req, res) => {
  const { postId } = req.params.id;
  const comments = await Comment.where({
    postId,
  });
  return res.json({
    comments: shuffle(comments),
  });
};
