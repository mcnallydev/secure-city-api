module.exports = {
  db: {
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    ssl: true,
    name: 'db',
    connector: 'postgresql',
  }
};
