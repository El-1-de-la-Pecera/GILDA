const { Pool } = require("pg");
const { db } = require("./config");
const pool = new Pool({
  // user: db.user,
  // host: db.host,
  // database: db.database,
  // password: db.password,
  // port: db.port
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
