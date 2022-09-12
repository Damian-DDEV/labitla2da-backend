"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Theaters",
      [
        {
          id_show: 1,
          name: "E",
        },
        {
          id_show: 2,
          name: "F",
        },
        {
          id_show: 3,
          name: "Z",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Theaters", null, {});
  },
};
