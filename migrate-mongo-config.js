// migrate-mongo-config.js
const config = {
  mongodb: {
    url: "mongodb://localhost:27017/waizly",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
};

module.exports = config;
