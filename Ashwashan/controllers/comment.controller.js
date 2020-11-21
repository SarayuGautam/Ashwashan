const Comment = require("../models/Comment");
const Post = require("../models/Post");
const shuffle = require("../helpers/array.suffle");

exports.addComment = async (req, res) => {
  const { commentBody } = req.body;
  const userId = req.user._id;
  const postId = req.params.id;
  const myPost = req.params.myPost;

  const post = await Post.findOne({
    _id: postId,
  });
  const comment = new Comment({
    commentBody,
    userId,
    postId,
  });
  await comment.save();

  const comments = await Comment.where({
    postId,
  });
  return res.render("particular_exp", {
    post,
    postId,
    myPost,
    comments: shuffle(comments),
  });
};
