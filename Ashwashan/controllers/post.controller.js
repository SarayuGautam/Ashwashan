const Post = require("../models/Post");
const shuffle = require("../helpers/array.suffle");
const User = require("../models/User");
const Comment = require("../models/Comment");

exports.savePost = async (req, res) => {
  const { postTitle, postBody } = req.body;
  const userId = req.user._id;
  const category = req.query.category;

  const post = new Post({
    postTitle,
    postBody,
    userId,
    category,
  });
  await post.save();
  return res.redirect("/posts/all?category=" + category);
};

exports.getPost = async (req, res) => {
  if (!req.user) {
    req.flash("message", "Please Login");
    return res.redirect("back");
  } else {
    const postId = req.params.id;
    const myPost = req.params.myPost;
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
      myPost,
      comments: shuffle(comments),
    });
  }
};

exports.getallPosts = async (req, res) => {
  if (!req.user) {
    req.flash("message", "Please Login");
    return res.redirect("back");
  } else {
    const category = req.query.category;

    const posts = req.user
      ? await Post.where({
          category,
          userId: { $nin: req.user._id },
        })
      : await Post.where({
          category,
        });

    return res.render("collective_exp", {
      category,
      message: req.flash("message"),
      posts: shuffle(posts),
      myPost: "not",
    });
  }
};

exports.getmyPosts = async (req, res) => {
  if (!req.user) {
    req.flash("message", "Please Login");
    return res.redirect("back");
  } else {
    const category = req.query.category;
    const userId = req.user._id;
    const posts = await Post.where({
      category,
      userId,
    });

    return res.render("collective_exp", {
      category,
      posts: shuffle(posts),
      myPost: "my",
    });
  }
};
