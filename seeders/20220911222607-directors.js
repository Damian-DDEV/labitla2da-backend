"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Directors",
      [
        {
          name: "Martin",
          lastname: "Scorsese",
        },
        {
          name: "Billy",
          lastname: "Wilder",
        },
        {
          name: "Federico",
          lastname: "Fellini",
        },
        {
          name: "Paolo",
          lastname: "Sorrentino",
        },
        {
          name: "Woody",
          lastname: "Allen",
        },
        {
          name: "Akira",
          lastname: "Kurosawa",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Directors", null, {});
  },
};
