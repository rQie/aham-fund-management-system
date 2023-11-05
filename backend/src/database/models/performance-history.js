"use strict";

const { sequelize, Sequelize } = require("./index");

const Fund = require("./fund");

const PerformanceHistory = sequelize.define(
  "Performance_Histories",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    value: {
      type: Sequelize.DOUBLE,
    },
    percent: {
      type: Sequelize.DECIMAL(5, 2),
    },
    fund_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "Funds",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    history_date: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: true,
  }
);

PerformanceHistory.belongsTo(Fund, {
  foreignKey: "fund_id",
  as: "fund",
});

Fund.hasMany(PerformanceHistory, {
  foreignKey: "fund_id",
  as: "performance_histories",
});

module.exports = PerformanceHistory;
