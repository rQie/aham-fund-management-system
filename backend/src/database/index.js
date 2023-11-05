const { sequelize } = require("./models");

module.exports.connect = async function (req, res, next) {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    return "success";
  } catch (error) {
    return error;
  }
};
