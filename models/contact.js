const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {}
  Contact.init(
    {
      textarea: DataTypes.TEXT,
      phone_number: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contact",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  return Contact;
};
