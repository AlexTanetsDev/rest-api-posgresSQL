const pgp = require("pg-promise")();
require("dotenv").config();
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env;

const cn = {
  host: "localhost",
  port: 5432,
  database: DATABASE_NAME,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
};

const db = pgp(cn);

module.exports = db;
