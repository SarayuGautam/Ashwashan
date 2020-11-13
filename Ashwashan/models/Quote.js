const { Schema, model } = require("mongoose");
const moment = require("moment");

const quoteSchema = new Schema(
  {
    quote: {
      type: String,
      required: "quote is required",
    },
    author: {
      type: String,
      required: "author is required",
    },
  },
  {
    timestamps: true,
  }
);

quoteSchema.methods.toJSON = function () {
  const quote = this;
  const quoteObject = quote.toObject();
  quoteObject.createdAt = moment(quoteObject.createdAt).format(
    "ddd, d MMM YYYY"
  );
  quoteObject.updatedAt = moment(quoteObject.updatedAt).format(
    "ddd, d MMM YYYY"
  );
  return quoteObject;
};

const Quote = model("Quote", quoteSchema);

module.exports = Quote;
