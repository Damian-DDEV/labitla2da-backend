const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Directors extends Model {
    static associate(models) {
      Directors.hasOne(models.Movies, {
        as: "director",
        foreignKey: "id_director",
      });
    }
  }
  Directors.init(
    {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Directors",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  return Directors;
};
