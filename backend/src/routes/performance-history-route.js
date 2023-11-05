const express = require("express");
const performanceHistoryRoute = express.Router();
const passport = require("passport");
require("../middlewares/auth/passport")(passport);

const controller = require("../controllers/performance-history-controller");
const { validations } = require("../middlewares");

performanceHistoryRoute
  .route("/")
  .get(
    validations.performanceHistory.validate("list-performance-history"),
    controller.getAllPerformanceHistoriesByFundId
  );

module.exports = performanceHistoryRoute;
