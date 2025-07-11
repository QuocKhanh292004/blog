const express = require("express");
const router = express.Router();
const newConTroller = require("../app/controllers/newController");
router.use("/:slug", newConTroller.show);
router.use("/", newConTroller.index);
module.exports = router;
