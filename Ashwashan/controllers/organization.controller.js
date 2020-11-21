const Organization = require("../models/Organization");
const shuffle = require("../helpers/array.suffle");

exports.getOrganizations = async (req, res) => {
  if (!req.user) {
    req.flash("message", "Please Login");
    return res.redirect("back");
  } else {
    const category = req.params.category;
    const organizations = await Organization.find({
      category,
    });
    return res.render("org_list", {
      organizations: shuffle(organizations),
    });
  }
};
