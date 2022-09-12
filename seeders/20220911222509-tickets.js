"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          id_show: 1,
          quantity: 3,
          code: uuidv4(),
          status: 1,
          email: "test@test.com",
          dni: "123456789",
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        },
        {
          id_show: 2,
          quantity: 1,
          code: uuidv4(),
          status: 1,
          email: "test2@test.com",
          dni: "123456789",
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        },
        {
          id_show: 3,
          quantity: 2,
          code: uuidv4(),
          status: 1,
          email: "test3@test.com",
          dni: "123456789",
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
