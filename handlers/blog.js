const db = require("../models");

module.exports.getBlogs = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blogs = await db.Blog.find({
      author_id: id,
    });
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};
module.exports.getBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await db.Blog.findById({ _id: id });
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

module.exports.addBlog = async (req, res, next) => {
  try {
    const newBlog = await db.Blog.create(req.body);
    res.status(200).json({ newBlog, SUCCESS: true });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteBlog = async (req, res, next) => {
  try {
    await db.Blog.deleteOne({ id: req.body.id });
    res.json({ SUCCESS: true });
  } catch (err) {
    next(err);
  }
};
