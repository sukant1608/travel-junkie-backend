const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blog_title: {
    type: String,
    required: true,
  },
  author_id: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  must_visit: {
    type: Array,
    default: [],
  },
  travel_tips: {
    type: Array,
    default: [],
  },
  do_not_do: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Blog", blogSchema);
