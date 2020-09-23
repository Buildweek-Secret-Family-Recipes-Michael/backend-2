const knex = require('knex');

const knexConfig = require('../knexfile.ts');

module.exports = knex(knexConfig.development);
