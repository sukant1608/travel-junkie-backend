const db = require("../models");

module.exports.getProfile = async (req, res, next) => {
  try {
    const user = await db.User.findById(req.params.id);
    if (!user) {
      throw new Error("No such user found");
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports.updateStatus = async (req, res, next) => {
  try {
    const user = await db.User.findById(req.body.id);
    if (user) {
      user.status = req.body.status;
      await user.save();
      res.status(200).json(user.status);
    } else {
      throw new Error("No such user found");
    }
  } catch (error) {
    next(error);
  }
};
