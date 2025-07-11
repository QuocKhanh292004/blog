const express = require("express");
const router = express.Router();
const siteConTroller = require("../app/controllers/siteController");

router.use("/search", siteConTroller.search);
router.use("/", siteConTroller.index);
module.exports = router;
