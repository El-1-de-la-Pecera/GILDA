// import pg from 'pg'
// const { Client } = pg

const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 5432,
  database: 'gilda',
});

client.connect();

export { client };
