"use strict";

const { sequelize, Sequelize } = require("./index");

const Fund = sequelize.define(
  "Funds",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    investment_type: {
      type: Sequelize.STRING,
    },
    net_asset_value: {
      type: Sequelize.DOUBLE,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Fund;
