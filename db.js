const pgp = require("pg-promise")();
require("dotenv").config();
const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

const cn = {
  host: "db",
  port: 1818,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
};

const db = pgp(cn);

module.exports = db;
