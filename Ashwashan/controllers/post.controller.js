const Post = require("../models/Post");

exports.addPost = async (req, res) => {
  const { postTitle, postBody } = req.body;
  const userId = req.user._id;

  const post = new Post({
    postTitle,
    postBody,
    userId,
  });
  await post.save();
  return res.json({
    post,
  });
};

exports.getPost = async (req, res) => {
  const postId = req.params._id;
  const post = await Post.findOne({
    _id: postId,
  });
  console.log(post);
  return res.json(post);
};
