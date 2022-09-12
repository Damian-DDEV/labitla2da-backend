'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      Tickets.belongsTo(models.Shows, {as: "shows", foreignKey: "id_show"});
    }
  }
  Tickets.init({
    id_show: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    code: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tickets',
    paranoid: true,
    deletedAt: 'deleteAt'
  });
  return Tickets;
};