// import from database index

const { query } = require("../db/index.js");

// query comment table to return all comments by id

async function getComments(id){
  const results = await query(`SELECT *
  FROM comments WHERE comment_id = $1`, [id]);
  return results.rows[0];
}

// export it 
module.exports = { getComments };