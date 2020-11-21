const Quote = require("../models/Quote");
const shuffle = require("../helpers/array.suffle");

exports.getQuotes = async (req, res) => {
  if (!req.user) {
    req.flash("message", "Please Login");
    return res.redirect("back");
  } else {
    const quotes = await Quote.find({});
    return res.render("collective_quotes", {
      quotes: shuffle(quotes),
    });
  }
};
