"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    static associate(models) {
      Genres.hasOne(models.Movies, { as: "genre", foreignKey: "id_genre" });
    }
  }
  Genres.init(
    {
      name: DataTypes.STRING,
    },

    {
      sequelize,
      modelName: "Genres",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  return Genres;
};
