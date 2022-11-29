import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

// creating a function called query
const query = (text, params, callback) => {
   return pool.query(text, params, callback)
  };

export default query;