const { responseBodyFormater } = require("../utils/helper");

module.exports.notFound = function (req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  return next(error);
};

module.exports.errorHandler = function (error, req, res, next) {
  let statusCode =
    res.statusCode !== 200 && res.statusCode !== 201 ? res.statusCode : 500;
  let responseBody = responseBodyFormater({
    status: "error",
    message: error.message,
  });
  if (process.env.NODE_ENV === "development")
    responseBody = {
      ...responseBody,
      stack: error.stack,
    };
  return res.status(statusCode).json(responseBody);
};
