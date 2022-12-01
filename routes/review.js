const router = require("express").Router();
const handle = require("../handlers");

router.post("/add", handle.addReview);

module.exports = router;
