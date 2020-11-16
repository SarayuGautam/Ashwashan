const Organization = require("../models/Organization");
const shuffle = require("../helpers/array.suffle");

exports.getOrganizations = async (req, res) => {
  const organizations = await Organization.find({});
  return res.json({
    articles: shuffle(organizations),
  });
};
