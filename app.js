const express = require("express");
const logger = require("morgan");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./controllers/errorHandler");

const path = require("path");
const pug = require("pug");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(logger("dev"));

app.use("/api/emailSender/user", userRoute);

app.use(errorHandler);
module.exports = app;
