'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      unique: "The username is already in use",
      validate: {
        notEmpty: {
            msg: "The username field cannot be empty."
        },
        notNull: {
            msg: "The username field cannot be null."
        },
        isAlpha: {
            msg: "The username field cannot contain special characters."
        }
      }
    },
    rol:  {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
            msg: "The rol field cannot be empty.."
        },
        isAlpha: {
            msg: "The rol field cannot contain special characters."
        }
      }
    },

    firstname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
            msg: "The firstname field cannot be empty."
        },
        notNull: {
            msg: "The firstname field cannot be null."
        },
        isAlpha: {
            msg: "The username field cannot contain special characters."
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
            msg: "The lastname field cannot be empty."
        },
        notNull: {
            msg: "The lastname field cannot be null."
        },
        isAlpha: {
            msg: "The username field cannot contain special characters."
        }
      }
    },
    password:  {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
            msg: "The lastname field cannot be empty."
        },
        notNull: {
            msg: "The lastname field cannot be null."
        },
        isAlpha: {
            msg: "The username field cannot contain special characters."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: "The email is already in use",
      validate: {
        isEmail: true,
        notEmpty: {
            msg: "The email field cannot be empty."
        },
        notNull: {
            msg: "The email field cannot be null."
        },
        isAlpha: {
            msg: "The username field cannot contain special characters."
        }
      }
    },
    dni:  {
      type: DataTypes.STRING,
      unique: "The dni/id is already in use",
      validate: {
        notEmpty: {
            msg: "The dni/id field cannot be empty."
        },
        notNull: {
            msg: "The dni/id field cannot be null."
        },
        isAlpha: {
            msg: "The dni/id field cannot contain special characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};