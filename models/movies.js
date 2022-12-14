'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movies.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: "The name field cannot be empty."
        }
      }
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: "The synopsis field cannot be empty."
        }
      }
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: "The duration field cannot be empty."
        }
      }
    },
    id_genre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: "The id_genre field cannot be empty."
        }
      }
    },
    path_img: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: "The path_img field cannot be empty."
        }
      }
    },
    format_movie: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: "The format_movie field cannot be empty."
        }
      }
    },
    id_usr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
            msg: "The id_usr field cannot be empty."
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};