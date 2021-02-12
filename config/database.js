// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'strapi'),
//         username: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'changeme'),
//         schema: env('DATABASE_SCHEMA', 'public'), // Not Required
//         ssl: {
//           rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//         },
//       },
//       options: {
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//     },
//   },
// });



const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        }
      },
      options: {
        ssl: true,
      },
    },
  },
});