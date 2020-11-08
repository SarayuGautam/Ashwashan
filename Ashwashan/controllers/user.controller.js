const {
  validateName,
  validatePassword,
  validatePhone,
} = require("../handlers/custom_validators");
const User = require("../models/User");
const CustomError = require("../handlers/custom_error");

exports.signup = async (req, res) => {
  const { username, password, phone } = req.body;
  validateName(username);
  validatePassword(password);
  validatePhone(phone);
  const isExist = await User.findOne({
    username,
  });
  if (isExist) {
    throw new CustomError(406, "Account already exists with this number!");
  }

  const user = new User({
    name,
    password,
    phone,
  });
  await user.save();
  return res.json({
    user,
  });
};

exports.login = async (req, res) => {
  const { password, username } = req.body;
  validateName(username);
  validatePassword(password);
  const user = await User.findByCredentials(username, password);
  const response = {};

  const token = await user.generateAuthToken();
  response.user = user;
  response.token = token;
  response.message = "Login successful!";

  return res.json(response);
};

exports.getMyProfile = async (req, res) => {
  return res.json(req.user);
};
