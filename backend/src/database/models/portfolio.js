"use strict";

const { sequelize, Sequelize } = require("./index");

const Fund = require("./fund");

const Portfolio = sequelize.define(
  "Portfolios",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    fund_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "Funds",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    purchased_unit: {
      type: Sequelize.INTEGER,
    },
    transaction_date: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: true,
  }
);

Portfolio.belongsTo(Fund, {
  foreignKey: "fund_id",
  as: "fund",
});

Fund.hasMany(Portfolio, {
  foreignKey: "fund_id",
  as: "portfolios",
});

module.exports = Portfolio;
