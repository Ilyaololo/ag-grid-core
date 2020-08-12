'use strict';

const dotenv = require('dotenv');
const nconf = require('nconf');

dotenv.config();

nconf.env({
  separator: '_',
  lowerCase: true,
  parseValues: true,
});

const config = {
  url: nconf.get('database:url'),
  // database: nconf.get('postgres:db') || 'db',
  entities: ['dist/entities/*.js'],
  // host: nconf.get('postgres:host') || 'localhost',
  logging: nconf.get('typeorm:logging') || false,
  migrationsRun: false,
  // password: nconf.get('postgres:password') || 'admin',
  // port: nconf.get('postgres:port') || 5432,
  synchronize: false,
  type: 'postgres',
  // username: nconf.get('postgres:user') || 'admin',
  maxQueryExecutionTime: 500,
  keepConnectionAlive: true,
  migrations: [
    'dist/migrations/*.js',
  ],
  poolErrorHandler(err) {
    console.error(err);
  },
};

module.exports = config;
