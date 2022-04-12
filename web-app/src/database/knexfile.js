require('dotenv').config({ path: '../../../.env' });

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3306,
    charset: 'utf8mb4',
  },
  debug: process.env.DB_DEBUG === 'true',
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  },
};
