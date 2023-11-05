"use strict";

const Sequelize = require("sequelize");

const config = require("../config/config.js")[
  process.env.NODE_ENV || "development"
];
const db = {
  sequelize: new Sequelize({
    ...config,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }),
  Sequelize,
};

module.exports = db;
