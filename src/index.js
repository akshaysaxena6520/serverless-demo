const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./routes/auth.route");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Routes handling
app.use("/auth", userRoutes);
module.exports = app;
