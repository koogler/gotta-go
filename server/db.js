const Pool = require("pg").Pool

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  port: 5432,
  database: "gottago"
});

module.exports = pool;