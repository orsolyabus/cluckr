// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'clucks',
      //these are only for linux
      username: "orsolya",
      password: 'apple'
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },

};
