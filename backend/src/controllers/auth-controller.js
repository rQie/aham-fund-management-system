const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../database/models/user");
const errors = require("../utils/errors");
const { responseBodyFormater } = require("../utils/helper");

module.exports.register = async function (req, res, next) {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(
    password,
    parseInt(process.env.SALT_ROUNDS)
  );
  try {
    const user = await User.findOrCreate({
      where: {
        username,
      },
      defaults: {
        username,
        password: hashedPassword,
      },
    });
    if (!user[1]) {
      res.status(400);
      throw new Error(errors.USER_EXIST);
    }
    return res
      .status(201)
      .json(responseBodyFormater({ status: "success", data: user[0] }));
  } catch (error) {
    return next(error);
  }
};

module.exports.login = async function (req, res, next) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      res.status(400);
      throw new Error(errors.USER_NOT_EXIST);
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400);
      throw new Error(errors.INVALID_PASSWORD);
    }
    const payload = {
      id: user.id,
      username: user.username,
      iat: Math.floor(Date.now() / 1000),
    };
    const expiry = {
      expiresIn: 60 * 60 * 24 * 7, // 1 week
    };
    jwt.sign(payload, process.env.JWT_SECRET, expiry, (error, token) => {
      if (error) return next(error);

      return res
        .status(200)
        .json(responseBodyFormater({ status: "success", data: { token } }));
    });
  } catch (error) {
    return next(error);
  }
};
