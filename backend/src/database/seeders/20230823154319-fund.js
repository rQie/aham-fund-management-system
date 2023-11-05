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
    return queryInterface.bulkInsert("Funds", [
      {
        name: "Malaysia Equity Fund",
        description:
          "A fund focused on investing in Malaysian equities, offering exposure to the local stock market.",
        investment_type: "Equity",
        net_asset_value: 5000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bond Income Fund",
        description:
          "This fund primarily invests in fixed-income securities, aiming to provide regular interest income.",
        investment_type: "Fixed Income",
        net_asset_value: 4000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Southeast Asia Tech Fund",
        description:
          "A growth-oriented fund that targets technology companies in Southeast Asia.",
        investment_type: "Equity",
        net_asset_value: 6000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shariah Dividend Fund",
        description:
          "A fund compliant with Shariah principles, emphasizing dividend-yielding equities.",
        investment_type: "Equity",
        net_asset_value: 4500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Real Estate Opportunities Fund",
        description:
          "This fund invests in various real estate projects and properties across Malaysia.",
        investment_type: "Real Estate",
        net_asset_value: 3500,
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
    return queryInterface.bulkDelete("Funds", null, {});
  },
};
