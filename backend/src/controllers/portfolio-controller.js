const Porfolio = require('../database/models/portfolio')
const Fund = require('../database/models/fund')
const errors = require('../utils/errors')
const { responseBodyFormater } = require('../utils/helper')

module.exports.getAllPortfolios = async function (req, res, next) {
  const user_id = req.user.id
  try {
    const porfolios = await Porfolio.findAll({
      where: {
        user_id
      },
      order: [['transaction_date', 'DESC']],
      include: [
        {
          model: Fund,
          as: 'fund'
        }
      ]
    })
    if (porfolios.length === 0) {
      res.status(400)
      throw new Error(errors.NO_DATA)
    }
    return res.status(200).json(
      responseBodyFormater({
        status: 'success',
        data: {
          investment: porfolios.map((porfolio) => ({
            ...porfolio.dataValues,
            total_amount:
              porfolio.dataValues.purchased_unit * porfolio.dataValues.fund.net_asset_value
          })),
          grand_total: porfolios.reduce(
            (prev, curr) =>
              prev + curr.dataValues.purchased_unit * curr.dataValues.fund.net_asset_value,
            0
          )
        }
      })
    )
  } catch (error) {
    return next(error)
  }
}
