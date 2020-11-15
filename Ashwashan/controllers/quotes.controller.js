const Quote = require("../models/Quote");
const shuffle = require("../helpers/array.suffle");

exports.getQuotes = async (req, res) => {
  const quotes = await Quote.find({});
  return res.json({
    quotes: shuffle(quotes),
  });
};
