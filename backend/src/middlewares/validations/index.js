const auth = require("./auth-validation");
const performanceHistory = require("./performance-history-validation");
const invest = require("./invest-validation");

const validations = {
  auth,
  performanceHistory,
  invest,
};

module.exports = validations;
