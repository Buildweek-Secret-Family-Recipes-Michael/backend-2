"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            port: process.env.DB_PORT,
        },
        useNullAsDefault: true,
        migrations: {
            directory: './src/database/migrations',
        },
        seeds: { directory: './src/database/seeds' },
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        useNullAsDefault: true,
        migrations: {
            directory: './src/database/migrations',
        },
        seeds: { directory: './src/database/seeds' },
    },
};
