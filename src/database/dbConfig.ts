const knex = require('knex');

const knexConfig = require('/Users/Michelle/Desktop/backend-2/knexfile');

export const db = knex(knexConfig.development);
