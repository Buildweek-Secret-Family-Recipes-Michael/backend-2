const knex = require('knex');

const knexConfig = require("../../knexfile");

export const db = knex(knexConfig.development);
