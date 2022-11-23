// import from database index

const { query } = require("../db/index.js");

// query comment table to return all comments by id

async function getComments() {
  const results = await query(`SELECT * FROM comments;`);
  return results.rows;
}

//Query comment table to delete comment by ID
async function deleteComment(id) {
  const results = await query(`DELETE FROM comments WHERE comment_id = $1`, [
    id,
  ]);
  return results.rows[0];
}

// Create new comment
async function createComment({
  snippet_id,
  comment_content,
  comment_author,
  comment_date_create,
}) {
  const result = await query(
    `INSERT INTO comments (snippet_id, comment_content, comment_author, comment_date_create) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [snippet_id, comment_content, comment_author, comment_date_create]
  );
  return result.rows[0];
}

async function getCommentsBySnippetId(id) {
  const results = await query(
    `SELECT *
  FROM comments WHERE snippet_id = $1`,
    [id]
  );
  return results.rows;
}

// export it
module.exports = {
  getComments,
  getCommentsBySnippetId,
  deleteComment,
  createComment,
};
