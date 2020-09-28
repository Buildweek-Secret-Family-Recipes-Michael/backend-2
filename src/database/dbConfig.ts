const knex = require('knex');

const knexConfig = require("../../knexfile");

const dbNode = process.env.NODE_ENV || "development"

export const db = knex(knexConfig[dbNode])