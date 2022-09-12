const { Sequelize } = require('sequelize');
const db_config = require("../config/dbconf.js");
const sequelize = new Sequelize(db_config.database, db_config.username, db_config.password, {
  host: db_config.host,
  dialect: db_config.dialect,
  logging: false
});


sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch( error  => {
  console.error(`Unable to connect to the database:, ${error.message}`);
})






