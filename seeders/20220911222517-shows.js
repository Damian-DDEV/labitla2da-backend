"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Shows",
      [
        {
          date_time: "2022-09-02 20:00:00",
          tickets_availables: 4,
          id_movie: 1,
          id_theaters: 3,
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        },
        {
          date_time: "2022-09-02 20:00:00",
          tickets_availables: 99,
          id_movie: 2,
          id_theaters: 2,
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        },
        {
          date_time: "2022-09-02 20:00:00",
          tickets_availables: 99,
          id_movie: 3,
          id_theaters: 1,
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shows", null, {});
  },
};
