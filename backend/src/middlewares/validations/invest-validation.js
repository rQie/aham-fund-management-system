const Joi = require("joi");

module.exports.validate = (method) => {
  return function (req, res, next) {
    let schema, req_value, req_type;

    switch (method) {
      case "invest": {
        schema = Joi.object().keys({
          fund_id: Joi.number().required(),
          purchased_unit: Joi.number().min(1).required(),
        });
        req_value = req.body;
        req_type = "body";
        break;
      }

      default: {
        break;
      }
    }

    const { error, value } = schema?.validate(req_value);

    if (error) {
      res.status(400);
      return next(error);
    }

    if (req_type === "query") req.query = value;
    if (req_type === "body") req.body = value;

    return next();
  };
};
