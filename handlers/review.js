const db = require("../models");

module.exports.addReview = async (req, res, next) => {
  try {
    const review = await db.Review.create(req.body);
    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
};
