"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false,
        isAlpha: false,
        validate: {
          notEmpty: {
            msg: "The username field cannot be empty.",
          },
        },
      },
      rol: {
        type: Sequelize.INTEGER(1),
        validate: {
          notEmpty: {
            msg: "The rol field cannot be empty.",
          },
        },
      },

      firstname: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The firstname field cannot be empty.",
          },
        },
      },

      lastname: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The lastname field cannot be empty.",
          },
        },
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: {
          msg: "The email is already in use",
        },
        validate: {
          isEmail: true,
          notEmpty: {
            msg: "The email field cannot be empty.",
          },
        },
      },
      dni: {
        type: Sequelize.STRING(15),
        unique: "The dni/id is already in use",
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The dni/id field cannot be empty.",
          },
        },
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
        paranoid: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
