'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      unique: "The user name is already in use",
      validate: {
        notEmpty: {
            msg: "El campo usuario no puede estar vacio."
        },
        notNull: {
            msg: "El campo usuario no puede ser nulo."
        },
        isAlpha: {
            msg: "El campo usuario no puede tener caracteres especiales."
        }
      }
    },
    rol: DataTypes.INTEGER,
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};