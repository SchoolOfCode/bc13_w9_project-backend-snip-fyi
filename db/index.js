// const { Pool } = require("pg");

import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

// creating a function called query
const query = (text, params, callback) => {    return pool.query(text, params, callback);};

export default query;

// export default {
//   query: function (text, params) {
//     return pool.query(text, params);
//   },
// };

// import pg from "pg";

// const pool = new pg.Pool({    connectionString: process.env.DB_URL,});
// const query = (text, params, callback) => {    return pool.query(text, params, callback);};
// export default query;