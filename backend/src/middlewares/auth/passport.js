const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const User = require("../../database/models/user");
const errors = require("../../utils/errors");

module.exports = function (passport) {
  passport.use(
    new StrategyJwt(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      async function (jwtPayload, done) {
        const { username } = jwtPayload;
        if (username) {
          try {
            const user = await User.findOne({
              where: {
                username,
              },
            });

            if (!user || user.length === 0 || user[0] === 0)
              throw new Error(errors.UNAUTHORIZED);

            return done(null, jwtPayload);
          } catch (error) {
            return done(error, false);
          }
        } else {
          const error = new Error(errors.UNAUTHORIZED);
          return done(error, false);
        }
      }
    )
  );
};
