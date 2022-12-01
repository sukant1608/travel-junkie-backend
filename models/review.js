const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  review: {
    type: String,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
