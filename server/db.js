const { Pool } = require("pg")

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  port: 5432,
  database: "gottago"
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}