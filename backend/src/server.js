require("dotenv").config();

const express = require("express");
const app = express();
const multer = require("multer");
const helmet = require("helmet");
const cors = require("cors");

const database = require("./database");
const middlewares = require("./middlewares");
const routes = require("./routes");
const { responseBodyFormater } = require("./utils/helper");

app.use(express.urlencoded({ extended: true })); // Parsing application/x-www-form-urlencoded
app.use(express.json()); // Parsing application/json
app.use(multer().array()); // Parsing formData

app.use(helmet());
app.use(cors());

app.use(async (req, res, next) => {
  console.info(
    `${new Date().toISOString()} => ${req.method} ${req.originalUrl}`
  );
  return next();
});

app.get("/", (req, res, next) => {
  return res.status(200).json(
    responseBodyFormater({
      status: "success",
      message: "Health Check, OK!",
    })
  );
});

database.connect().then((result) => {
  if (result === "success")
    console.info("Database connection has been established successfully");
  else {
    console.warn("\x1b[31m", "Unable to connect to the database");
    process.exit(1);
  }

  app.use("/api/v1", routes);

  app.use(middlewares.notFound);
  app.use(middlewares.errorHandler);
});

module.exports = app;
