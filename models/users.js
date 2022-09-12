"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "The rol field cannot be empty..",
          },
        },
      },

      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The firstname field cannot be empty.",
          },
        },
      },

      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The lastname field cannot be empty.",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        /*       allowNull: false,
      validate: {
        notEmpty: {
            msg: "The password field cannot be empty."
        },
      } */
      },
      email: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        unique: "The dni/id is already in use",
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The dni/id field cannot be empty.",
          },
        },
      },
    },

    {
      sequelize,
      modelName: "Users",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  return Users;
};
