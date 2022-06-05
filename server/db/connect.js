const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    database : 'todolist',
    user: 'postgres',
    password: 'postgres'
  }
});

module.exports = knex;