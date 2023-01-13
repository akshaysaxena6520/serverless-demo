const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/user.route");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Routes handling
// User routes
app.use("/user", userRoutes);
module.exports = app;
