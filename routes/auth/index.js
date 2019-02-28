const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../../models");

const router = express.Router();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://luigi:bananaRacecar1@ds151433.mlab.com:51433/pocket-stats"
  )
  .then(
    () => {
      console.log("We're connected to the database");
    },
    err => {
      console.log("We have an unsuccessful connection to the database");
    }
  );

router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  console.log("Here is the username and password", username, password);
});

module.exports = router;
