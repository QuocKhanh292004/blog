const express = require("express");
const router = express.Router();
const newConTroller = require("../app/controllers/newController");
router.get("/:slug", newConTroller.show);
router.get("/", newConTroller.index);
module.exports = router;
