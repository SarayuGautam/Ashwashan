const Post = require("../models/Post");
const shuffle = require("../helpers/array.suffle");
const User = require("../models/User");
const Comment = require("../models/Comment");

exports.savePost = async (req, res) => {
  console.log(req.body);
  const { postTitle, postBody } = req.body;
  const userId = req.user._id;
  const category = req.params.category;

  const post = new Post({
    postTitle,
    postBody,
    userId,
    category,
  });
  await post.save();
  const posts = await Post.where({
    category,
  });
  return res.redirect("/posts/" + category + "/all");
};

exports.getPost = async (req, res) => {
  const postId = req.params.id;
  console.log(postId);
  const post = await Post.findOne({
    _id: postId,
  });
  const comments = await Comment.where({
    postId,
  });
  const userId = post.userId;
  const username = (
    await User.findOne({
      _id: userId,
    })
  ).username;
  post.username = username;
  return res.render("particular_exp", {
    post,
    postId,
    comments: shuffle(comments),
  });
};

exports.getallPosts = async (req, res) => {
  const category = req.params.category;
  const posts = await Post.where({
    category,
  });

  return res.render("collective_exp", {
    posts: shuffle(posts),
  });
};
