const Article = require("../models/Article");
const shuffle = require("../helpers/array.suffle");

exports.getArticles = async (req, res) => {
  if (!req.user) {
    req.flash("message", "Please Login");
    return res.redirect("back");
  } else {
    const articles = await Article.find({});
    return res.render("collective_articles", {
      articles: shuffle(articles),
    });
  }
};
