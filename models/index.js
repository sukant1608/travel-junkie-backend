const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.URL;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

module.exports.User = require("./user");
module.exports.Blog = require("./blog");
module.exports.Review = require("./review");
