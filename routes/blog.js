const router = require("express").Router();
const handle = require("../handlers");
// const auth = require("../middlewares/auth");

router.get("/:id", handle.getBlog);
router.get("/user/:id", handle.getBlogs);
router.post("/addBlog", handle.addBlog);
router.delete("/deleteBlog", handle.deleteBlog);

module.exports = router;
