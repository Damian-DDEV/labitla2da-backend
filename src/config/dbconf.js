dot = require('dotenv').config()
module.exports = {
    HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    dialect: process.env.DB_ENGINE
};