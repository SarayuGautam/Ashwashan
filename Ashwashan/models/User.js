const assert = require("assert");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const CustomError = require("../handlers/custom_error");

const userSchema = new Schema(
  {
    username: {
      type: String,
      // required: "Username except your own name is required",
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      // required: "Password is required",
    },
    phone: {
      type: String,
      // required: "Phone number is required!",
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
      parseInt(process.env.SALT_ROUNDS)
    );
  }
  next();
});
userSchema.methods.isPassword = async function (password) {
  const user = this;
  const isPassword = await bcrypt.compare(password, user.password);
  return isPassword;
};

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  userObject.createdAt = moment(userObject.createdAt).format("ddd, d MMM YYYY");
  userObject.updatedAt = moment(userObject.updatedAt).format("ddd, d MMM YYYY");
  delete userObject.password;
  return userObject;
};

userSchema.statics.findByCredentials = async (phone, password) => {
  const user = await model("User", userSchema).findOne({
    phone,
  });
  if (!user) throw new CustomError(401, "Invalid credentials!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new CustomError(401, "Invalid credentials!");
  return user;
};
userSchema.statics.findByPhone = async (phone) => {
  const user = await model("User", userSchema).findOne({
    phone,
  });
  return user;
};
const User = model("User", userSchema);

module.exports = User;
