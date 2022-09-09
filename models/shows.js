'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shows.belongsTo(models.Theaters, {as: "theaters", foreignKey: "id_theaters"});
      Shows.belongsTo(models.Movies, {as: "movies", foreignKey: "id_movie"});
      Shows.hasMany(models.Tickets, {as: "shows", foreignKey: "id_show"});
    }
  }
  Shows.init({
    date_time: DataTypes.DATE,
    tickets_availables: DataTypes.INTEGER,
    id_movie: DataTypes.INTEGER,
    id_theaters: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shows',
    paranoid: true,
    deletedAt: 'deleteAt'
  });
  return Shows;
};