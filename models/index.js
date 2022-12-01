const mongoose = require("mongoose");

const url =
  "mongodb+srv://sukant:lekhraj@web-app.uiatt.mongodb.net/travelJunkieDB?retryWrites=true&w=majority";

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
