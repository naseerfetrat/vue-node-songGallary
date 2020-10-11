module.exports = {
  port: process.env.PORT || 8081,
  db_url: process.env.DB_URL || "mongodb://localhost:27017/SongGallary",
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
