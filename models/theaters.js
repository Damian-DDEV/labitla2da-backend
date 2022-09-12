"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theaters extends Model {
    static associate(models) {
      Theaters.hasMany(models.Shows, {
        as: "shows",
        foreignKey: "id_theaters",
      });
    }
  }
  Theaters.init(
    {
      id_show: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Theaters",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  return Theaters;
};
