const auth = require("./auth");
const basketball = require("./basketball");

const express = require("express");
const router = express.Router();

router.use("/auth", auth);
router.use("/nba", basketball);

module.exports = router;
