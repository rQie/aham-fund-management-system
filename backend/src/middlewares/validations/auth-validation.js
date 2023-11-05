const Joi = require("joi");

module.exports.validate = (method) => {
  return function (req, res, next) {
    let schema;

    switch (method) {
      case "login":
      case "register": {
        schema = Joi.object({
          username: Joi.string().required(),
          password: Joi.string().required(),
        });
        break;
      }

      default: {
        break;
      }
    }

    const { error, value } = schema?.validate(req.body);

    if (error) {
      res.status(400);
      return next(error);
    }

    req.body = value;
    return next();
  };
};
