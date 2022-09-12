("use strict");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "admin",
          rol: 1,
          firstname: "Fulano",
          lastname: "Detal",
          password:
            "$2b$10$SQB09oiPPKVFZY4CYdkV/.FM.z4ulVIs53rqLbkf6VSIjCNmx4DEu",
          email: "correo1@correo.com",
          dni: 12345678,
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        },
        {
          username: "cliente",
          rol: 0,
          firstname: "Mengano",
          lastname: "YTal",
          password:
            "$2b$10$SQB09oiPPKVFZY4CYdkV/.FM.z4ulVIs53rqLbkf6VSIjCNmx4DEu",
          email: "correo2@correo.com",
          dni: 12345678,
          createdAt: null,
          updatedAt: null,
          deletedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
