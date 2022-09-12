"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movies.belongsTo(models.Genres, {as: "genre", foreignKey: "id_genre"});
      Movies.belongsTo(models.Directors, {as: "director", foreignKey: "id_director"});
      Movies.hasMany(models.Shows, {as: "shows", foreignKey: "id_movie"});
    }
  }
  Movies.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The name field cannot be empty.",
          },
        },
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The synopsis field cannot be empty.",
          },
        },
      },
      year: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The year field cannot be empty.",
          },
        },
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The duration field cannot be empty.",
          },
        },
      },
      id_genre: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The id_genre field cannot be empty.",
          },
        },
      },
      path_img: {
        type: DataTypes.STRING
      },
      path_img_banner: {
        type: DataTypes.STRING
      },
      id_usr: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "The id_usr field cannot be empty.",
          },
        },
      }
    },
    {
      sequelize,
      modelName: "Movies",
      paranoid: true,
      deletedAt: 'deleteAt'
    }
  );
  return Movies;
};
