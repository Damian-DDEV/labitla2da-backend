const { Sequelize } = require('sequelize');
const db_config = require("../config/dbconf.js");


const sequelize = new Sequelize(db_config.DB_NAME, db_config.DB_USER, db_config.DB_PASS, {
  host: db_config.HOST,
  dialect: db_config.dialect,
  logging: false
});
  
  try {
  sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  





