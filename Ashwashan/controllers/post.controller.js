const Post = require("../models/Post");
const shuffle = require("../helpers/array.suffle");
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
  const postId = req.params.id;
  const post = await Post.findOne({
    _id: postId,
  });
  return res.json(post);
};

exports.getallPosts = async (req, res) => {
  const posts = await Post.find({});
  return res.json({
    posts: shuffle(posts),
  });
};
