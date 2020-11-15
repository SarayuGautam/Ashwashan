const { Schema, model } = require("mongoose");
const moment = require("moment");

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
    },
    postBody: {
      type: String,
      required: "post is required",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

postSchema.methods.toJSON = function () {
  const post = this;
  const postObject = post.toObject();
  postObject.createdAt = moment(postObject.createdAt).format("ddd, d MMM YYYY");
  postObject.updatedAt = moment(postObject.updatedAt).format("ddd, d MMM YYYY");
  return postObject;
};

const Post = model("Post", postSchema);

module.exports = Post;
