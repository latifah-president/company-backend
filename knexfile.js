require('dotenv');

localPg = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
}


module.exports = {

  development: {
    client: 'pg',
    connection: localPg,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds/'
    }
  },

  // testing: {
  //   client: 'pg',
  //   connection: testPg, 
  //   migrations: {
  //     directory: './database/migrations'
  //   },
  //   seeds: {
  //     directory: './database/seeds'
  //   },
  // },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
