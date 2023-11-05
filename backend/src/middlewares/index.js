const validations = require("./validations");
const { notFound, errorHandler } = require("./error-handler");
const auth = require("./auth");

const middlewares = {
  validations,
  notFound,
  errorHandler,
  auth,
};

module.exports = middlewares;
