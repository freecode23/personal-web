"use strict";
const DS = "/",
  PORT = process.env.PORT,
  base_url = `${process.env.BASE_URL}${PORT}${DS}`;

module.exports = {
  PORT,
  base_url,
  /**database configuration */
  db: {
    name: process.env.DATABASE_NAME,
    URL: process.env.MONGO_URL,
    options: {
      user: "",
      pass: "",
    },
  },
  /**to stop morgon make it false */
  debug_mongo: true,
  /**environment */
  dev: true,
};
