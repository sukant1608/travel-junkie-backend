const db = require("../models");

module.exports.search = async (req, res, next) => {
  try {
    const input_regex = new RegExp(req.params.id, "i");
    const blogs = await db.Blog.find({ location: { $regex: input_regex } });
    console.log(blogs);
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};
