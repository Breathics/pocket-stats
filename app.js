// Import Modules
// Define nba to access stats and teamData API endpoints
const express = require("express");
const nba = require("nba.js").default;
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// Define app to initialize express
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 8000;

// Logs HTTP request and status codes
app.use(morgan("dev"));
app.use(cors());

// Allows request body to be parsed
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Initialize CRUD API for user's favorite team
// Catch all route to render index file for all react routes
app.use(express.static(path.resolve(__dirname, "client", "build")));
app.use("/api", routes);
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// Returns a status code and handles our errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    code: err.status,
    message: err.message
  });
  console.log(err);
  next();
});

// Will use PORT defined above for the server to listen on
app.listen(PORT, (req, res) => {
  console.log("Listening on Port:", PORT);
});
