const assert = require("assert");
const { Schema, model } = require("mongoose");
const moment = require("moment");

const commentSchema = new Schema(
  {
    commentBody: {
      type: String,
      required: "post is required",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.methods.toJSON = function () {
  const comment = this;
  const commentObject = comment.toObject();
  commentObject.createdAt = moment(commentObject.createdAt).format(
    "ddd, d MMM YYYY"
  );
  commentObject.updatedAt = moment(commentObject.updatedAt).format(
    "ddd, d MMM YYYY"
  );
  return commentObject;
};

const Comment = model("Comment", commentSchema);

module.exports = Comment;
