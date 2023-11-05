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
    return queryInterface.bulkInsert("Users", [
      {
        username: "investor1",
        password:
          "$2b$10$.whzgnlPHbHTBjmMF14LP.ch7V68yhjYz7X7K2Lj12ozODxu.F2Uq",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "investor2",
        password:
          "$2b$10$.whzgnlPHbHTBjmMF14LP.ch7V68yhjYz7X7K2Lj12ozODxu.F2Uq",
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
    return queryInterface.bulkDelete("Users", null, {});
  },
};
