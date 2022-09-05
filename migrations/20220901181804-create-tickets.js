'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_show: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      deleteAt: {
        type: Sequelize.DATE,
        paranoid: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};