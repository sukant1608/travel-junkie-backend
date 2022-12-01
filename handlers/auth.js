const db = require("../models");

module.exports.register = async (req, res, next) => {
  try {
    const user = await db.User.create(req.body);
    const { id, username, password } = user;
    res.status(201).json({ id, username, password });
  } catch (err) {
    if (err.code == 11000) {
      err.message = "Sorry that username is already taken";
    }
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const user = await db.User.findOne({ username: req.body.username });
    if (!user) {
      throw new Error("No such user found");
    }
    const valid = await user.comparePassword(req.body.password);

    if (valid) {
      const { id, username, password } = user;
      res.json({
        username,
        id,
        password,
      });
    } else {
      throw new Error("Invalid Username or Password");
    }
  } catch (err) {
    next(err);
  }
};
