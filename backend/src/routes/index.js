const express = require("express");
const router = express.Router();

const authRoute = require("./auth-route");
const fundRoute = require("./fund-route");
const performanceHistoryRoute = require("./performance-history-route");
const investRoute = require("./invest-route");
const portfolioRoute = require("./portfolio-route");
const { auth } = require("../middlewares");

router.use("/auth", authRoute);
router.use("/fund", auth.authenticate, fundRoute);
router.use("/performance-history", auth.authenticate, performanceHistoryRoute);
router.use("/invest", auth.authenticate, investRoute);
router.use("/portfolio", auth.authenticate, portfolioRoute);

module.exports = router;
