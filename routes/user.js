const router = require("express").Router();
const handle = require("../handlers");

router.get("/:id", handle.getProfile);
router.patch("/status", handle.updateStatus);

module.exports = router;
