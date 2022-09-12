"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Genres",
      [
        {
          name: "Aventura"
        },
        {
          name: "Acción"
        },
        {
          name: "Fantasía"
        },
        {
          name: "Terror"
        },
        {
          name: "Comedia"
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Genres', null, {});

  },
};
