'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theaters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Theaters.hasMany(models.Shows, {as: "theaters", foreignKey:"id_theaters"});
      
    }
  }
  Theaters.init({
    id_show: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Theaters',
    paranoid: true,
    deletedAt: 'deleteAt'
  });
  return Theaters;
};