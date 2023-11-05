const express = require("express");
const portfolioRoute = express.Router();
const passport = require("passport");
require("../middlewares/auth/passport")(passport);

const controller = require("../controllers/portfolio-controller");

portfolioRoute.route("/").get(controller.getAllPortfolios);

module.exports = portfolioRoute;
