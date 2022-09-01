'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'movies',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
                msg: "The name field cannot be empty."
            }
          }
        },
        synopsis: {
          type: Sequelize.TEXT,
          allowNull: false,
          validate: {
            notEmpty: {
                msg: "The synopsis field cannot be empty."
            }
          }
        },
        duration: {
          type: Sequelize.TIME,
          allowNull: false,
          validate: {
            notEmpty: {
                msg: "The duration field cannot be empty."
            }
          }
        },
        id_genre: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: {
                msg: "The id_genre field cannot be empty."
            }
          }
        },
        path_img: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
                msg: "The path_img field cannot be empty."
            }
          }
        },
        format_movie: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
                msg: "The format_movie field cannot be empty."
            }
          }
        },
        id_usr: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: {
                msg: "The id_usr field cannot be empty."
            }
          }
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};