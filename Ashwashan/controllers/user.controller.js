const {
  validateName,
  validatePassword,
  validatePhone,
} = require("../handlers/custom_validators");
const User = require("../models/User");
const CustomError = require("../handlers/custom_error");

exports.signup = async (req, res) => {
  try {
    const { username, password, phone } = req.body;
    console.log(req.body);
    validateName(username);
    validatePassword(password);
    validatePhone(phone);
    const isExist = await User.findOne({
      phone,
    });
    if (isExist) {
      throw new CustomError(406, "Account already exists with this number!");
    }

    const user = new User({
      username,
      password,
      phone,
    });
    await user.save();
    req.session.userId = user._id.toString();
    return res.redirect("back");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
};

exports.login = async (req, res) => {
  const { password, phone } = req.body;
  validatePhone(phone);
  validatePassword(password);
  const user = await User.findByCredentials(phone, password);
  const response = {};
  req.session.userId = user._id.toString();
  response.message = "Login successful!";
  return res.redirect("back");
};

exports.getMyProfile = async (req, res) => {
  return res.json(req.user);
};
