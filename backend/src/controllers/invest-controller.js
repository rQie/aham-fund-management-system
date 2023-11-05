const Porfolio = require("../database/models/portfolio");
const Fund = require("../database/models/fund");
const { responseBodyFormater } = require("../utils/helper");

module.exports.invest = async function (req, res, next) {
  const user_id = req.user.id;
  const { fund_id, purchased_unit } = req.body;
  try {
    const [porfolio, fund] = await Promise.all([
      Porfolio.create({
        user_id,
        fund_id,
        purchased_unit,
        transaction_date: new Date(),
      }),
      Fund.findOne({
        where: {
          id: fund_id,
        },
      }),
    ]);
    return res.status(201).json(
      responseBodyFormater({
        status: "success",
        data: {
          ...porfolio.dataValues,
          total_amount: purchased_unit * fund.net_asset_value,
        },
      })
    );
  } catch (error) {
    return next(error);
  }
};
