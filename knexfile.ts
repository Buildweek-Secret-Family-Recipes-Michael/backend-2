module.exports = {
    development: {
      client: 'pg',
      connection: { 
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
        ssl: {
          sslmode: "require",
          rejectUnauthorized: false,
        }
      },
      useNullAsDefault: true,
      migrations: {
        directory: './src/database/migrations',
      },
      seeds: { directory: './src/database/seeds' },
    },
  };
  