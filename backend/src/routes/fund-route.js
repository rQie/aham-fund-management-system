const express = require("express");
const fundRoute = express.Router();
const passport = require("passport");
require("../middlewares/auth/passport")(passport);

const controller = require("../controllers/fund-controller");

fundRoute.route("/").get(controller.getAllFunds);

module.exports = fundRoute;
