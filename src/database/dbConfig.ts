import dotenv from "dotenv"
dotenv.config()

const knex = require('knex');

const knexConfig = require("../../knexfile");

export const db = knex(knexConfig.process.env.NODE_ENV);