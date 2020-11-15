const { Schema, model } = require("mongoose");
const moment = require("moment");

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: "title is required",
    },
    summary: {
      type: String,
      required: "summary is required",
    },
    imageUrl: {
      type: String,
      required: "imageUrl is required",
    },
    url: {
      type: String,
      required: "url is required",
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

articleSchema.methods.toJSON = function () {
  const article = this;
  const articleObject = article.toObject();
  articleObject.createdAt = moment(articleObject.createdAt).format(
    "ddd, d MMM YYYY"
  );
  articleObject.updatedAt = moment(articleObject.updatedAt).format(
    "ddd, d MMM YYYY"
  );
  return articleObject;
};

const Article = model("Article", articleSchema);

module.exports = Article;
