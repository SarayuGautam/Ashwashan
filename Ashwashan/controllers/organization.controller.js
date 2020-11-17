const Organization = require("../models/Organization");
const shuffle = require("../helpers/array.suffle");

exports.getOrganizations = async (req, res) => {
  const category = req.params.category;
  const organizations = await Organization.find({
    category,
  });
  return res.json({
    articles: shuffle(organizations),
  });
};
