"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    static associate(models) {
      Tickets.belongsTo(models.Shows, { as: "shows", foreignKey: "id_show" });
    }
  }
  Tickets.init(
    {
      id_show: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      code: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      dni: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tickets",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  return Tickets;
};
