const Fund = require("../database/models/fund");
const errors = require("../utils/errors");
const { responseBodyFormater } = require("../utils/helper");

module.exports.getAllFunds = async function (req, res, next) {
  try {
    const funds = await Fund.findAll();
    if (funds.length === 0) {
      res.status(400);
      throw new Error(errors.NO_DATA);
    }
    return res
      .status(200)
      .json(responseBodyFormater({ status: "success", data: funds }));
  } catch (error) {
    return next(error);
  }
};
