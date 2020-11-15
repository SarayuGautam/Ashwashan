const Article = require("../models/Article");
const shuffle = require("../helpers/array.suffle");

exports.getArticles = async (req, res) => {
  const articles = await Article.find({});
  return res.json({
    articles: shuffle(articles),
  });
};

exports.getAArticle = async (req, res) => {
  const articleId = req.params.id;
  const article = await Article.findOne({
    _id: articleId,
  });
  return res.json(article);
};
