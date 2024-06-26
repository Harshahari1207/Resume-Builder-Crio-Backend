const express = require("express");

const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./src/routes/v1/resume.route");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const app = express();

// set security HTTP headers - https://helmetjs.github.io/
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// parse json request body
// app.use(express.json());

// parse urlencoded request body
// app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({ error: "Not Found" });
});

module.exports = app;
