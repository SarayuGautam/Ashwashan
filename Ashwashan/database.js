const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Ashwashan", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on("error", (err) => {
  console.log(`Mongoose Connection Error: ${err.message}`);
});
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

// register models here
require("./models/User");
require("./models/Post");
require("./models/Comment");
require("./models/Article");
require("./models/Organization");
require("./models/Quote");
