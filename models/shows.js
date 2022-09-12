"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shows extends Model {
    static associate(models) {
      Shows.belongsTo(models.Theaters, {
        as: "theaters",
        foreignKey: "id_theaters",
      });
      Shows.belongsTo(models.Movies, { as: "movies", foreignKey: "id_movie" });
    }
  }
  Shows.init(
    {
      date_time: DataTypes.DATE,
      tickets_availables: DataTypes.INTEGER,
      id_movie: DataTypes.INTEGER,
      id_theaters: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Shows",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  return Shows;
};
