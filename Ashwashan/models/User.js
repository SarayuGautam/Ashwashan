const assert = require("assert");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Username except your own name is required",
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: "Password is required",
    },
    phone: {
      type: String,
      required: "Phone number is required!",
      trim: true,
      lowercase: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(
      user.password,
      parseInt(process.env.SALT_ROUNDS, 10)
    );
  }
  next();
});
userSchema.methods.isPassword = async function (password) {
  const user = this;
  const isPassword = await bcrypt.compare(password, user.password);
  return isPassword;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign(
    {
      _id: user._id.toString(),
    },
    process.env.JWT_SECRET
  );
  return token;
};
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  userObject.createdAt = moment(userObject.createdAt).format("ddd, d MMM YYYY");
  userObject.updatedAt = moment(userObject.updatedAt).format("ddd, d MMM YYYY");
  delete userObject.password;
  return userObject;
};

const User = model("User", userSchema);

module.exports = User;
