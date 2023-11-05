"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Performance_Histories", [
      {
        fund_id: 1,
        value: 5000,
        percent: 0,
        history_date: new Date("2023-01-15T12:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 1,
        value: 5100,
        percent: 2,
        history_date: new Date("2023-03-20T08:30:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 1,
        value: 4950,
        percent: -3,
        history_date: new Date("2023-06-10T15:45:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 1,
        value: 5050,
        percent: 2,
        history_date: new Date("2023-08-05T18:15:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 1,
        value: 5150,
        percent: 2,
        history_date: new Date("2023-10-25T11:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 2,
        value: 4000,
        percent: 0,
        history_date: new Date("2023-01-15T12:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 2,
        value: 4050,
        percent: 1.25,
        history_date: new Date("2023-03-20T08:30:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 2,
        value: 3950,
        percent: -2.47,
        history_date: new Date("2023-06-10T15:45:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 2,
        value: 4100,
        percent: 3.8,
        history_date: new Date("2023-08-05T18:15:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 2,
        value: 4050,
        percent: -1.22,
        history_date: new Date("2023-10-25T11:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 3,
        value: 6000,
        percent: 0,
        history_date: new Date("2023-01-15T12:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 3,
        value: 6150,
        percent: 2.5,
        history_date: new Date("2023-03-20T08:30:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 3,
        value: 5900,
        percent: -4.07,
        history_date: new Date("2023-06-10T15:45:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 3,
        value: 6100,
        percent: 3.39,
        history_date: new Date("2023-08-05T18:15:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 3,
        value: 6250,
        percent: 2.46,
        history_date: new Date("2023-10-25T11:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 4,
        value: 4500,
        percent: 0,
        history_date: new Date("2023-01-15T12:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 4,
        value: 4400,
        percent: -2.22,
        history_date: new Date("2023-03-20T08:30:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 4,
        value: 4550,
        percent: 3.41,
        history_date: new Date("2023-06-10T15:45:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 4,
        value: 4450,
        percent: -2.2,
        history_date: new Date("2023-08-05T18:15:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 4,
        value: 4600,
        percent: 3.37,
        history_date: new Date("2023-10-25T11:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 5,
        value: 3500,
        percent: 0,
        history_date: new Date("2023-01-15T12:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 5,
        value: 3550,
        percent: 1.43,
        history_date: new Date("2023-03-20T08:30:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 5,
        value: 3450,
        percent: -2.82,
        history_date: new Date("2023-06-10T15:45:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 5,
        value: 3600,
        percent: 4.35,
        history_date: new Date("2023-08-05T18:15:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fund_id: 5,
        value: 3650,
        percent: 1.39,
        history_date: new Date("2023-10-25T11:00:00Z"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Performance_Histories", null, {});
  },
};
