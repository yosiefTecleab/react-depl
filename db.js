const { Pool } = require("pg");
require("dotenv").config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

async function getPgVersion() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT version()");
    console.log(result.rows[0]);
    const result2 = await client.query("SELECT * FROM product");
    // console.table(result2.rows);
    console.log(result2.rows);
  } finally {
    client.release();
  }
}

getPgVersion();
