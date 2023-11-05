const express = require("express");
const investRoute = express.Router();
const passport = require("passport");
require("../middlewares/auth/passport")(passport);

const controller = require("../controllers/invest-controller");
const { validations } = require("../middlewares");

investRoute
  .route("/")
  .post(validations.invest.validate("invest"), controller.invest);

module.exports = investRoute;
