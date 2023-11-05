const PerformanceHistory = require('../database/models/performance-history')
const Fund = require('../database/models/fund')
const errors = require('../utils/errors')
const { responseBodyFormater } = require('../utils/helper')

module.exports.getAllPerformanceHistoriesByFundId = async function (req, res, next) {
  const { fund_id } = req.query
  try {
    const performanceHistories = await PerformanceHistory.findAll({
      where: {
        fund_id
      },
      order: [['history_date', 'DESC']],
      include: [
        {
          model: Fund,
          as: 'fund'
        }
      ]
    })
    if (performanceHistories.length === 0) {
      res.status(400)
      throw new Error(errors.NO_DATA)
    }
    return res
      .status(200)
      .json(responseBodyFormater({ status: 'success', data: performanceHistories }))
  } catch (error) {
    return next(error)
  }
}
