// import pg from 'pg'
// const { Client } = pg
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'gilda',
  password: 'edu',
  port: 5432,
});

client.connect();

export { client };
