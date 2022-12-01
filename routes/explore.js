const router = require("express").Router();
const handle = require("../handlers");

router.get("/:id", handle.search);

module.exports = router;
