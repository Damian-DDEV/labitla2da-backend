'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Contacts', [
      {
        textarea:"La sala 20 tenia fallas",
        phone_number: "341341341",
        email: "correo@correo.com"
      },
      {
        textarea:"La sala 23 se escuchaba bien",
        phone_number: "341341341",
        email: "correo@correo.com"
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};
