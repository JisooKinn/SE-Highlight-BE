require("dotenv").config();

const database = {
    database : process.env.DB_DATABASE,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    dialect : "mysql",
    port : process.env.DB_PORT
  }

module.exports = database;