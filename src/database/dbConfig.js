"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var knex = require('knex');
var knexConfig = require("../../knexfile");
var dbNode = process.env.NODE_ENV || "development";
exports.db = knex(knexConfig[dbNode]);
