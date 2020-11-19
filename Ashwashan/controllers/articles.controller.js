const Article = require("../models/Article");
const shuffle = require("../helpers/array.suffle");

exports.getArticles = async (req, res) => {
  const articles = await Article.find({});
  return res.render("collective_articles", {
    articles: shuffle(articles),
  });
};
