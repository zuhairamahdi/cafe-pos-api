

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: "localhost",
      port: 5432,
      database: "cafe",
      user: "postgres",
      password: "password",
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

