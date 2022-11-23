// import from ../db/index.js..DONE!
const { query } = require("../db/index.js");

// query database to return all code snippets
async function getSnippets() {
  const results = await query(`SELECT * FROM snippets`);
  return results.rows;
}

// query database to return code snippets by title
async function getByTitle(searchTerm) {
  const results = await query(
    `SELECT * FROM snippets WHERE snippet_title = $1`,
    [searchTerm]
  );
  return results.rows;
}
// query database to return code snippets by snippets_id
async function getSnippetByID(snippet_id) {
  const results = await query(`SELECT * FROM snippets WHERE snippet_id = $1`, [
    snippet_id,
  ]);
  return results.rows[0];
}

// query database to return code snippets by comments_id
async function getSnippetByComment(comment_id) {
  const results = await query(`SELECT * FROM snippets WHERE comment_id = $1`, [
    comment_id,
  ]);
  return results.rows[0];
}

// query database to create code snippet
async function createSnippet(snippet) {
  const results = await query(
    `INSERT INTO snippets (snippet_title, snippet_code, snippet_description, snippet_date_create) VALUES ($1, $2, $3, $4) RETURNING *`,
    [
      snippet.snippet_title,
      snippet.snippet_code,
      snippet.snippet_description,
      snippet.snippet_date_create,
    ]
  );
  return results.rows[0];
}

// query database to update code snippet by id
async function updateSnippet(snippet_id, updates) {
  const results = await query(
    `UPDATE snippets SET snippet_title = $1, snippet_code = $2, snippet_description = $3 WHERE snippet_id = $4 RETURNING *;`,
    [
      updates.snippet_title,
      updates.snippet_code,
      updates.snippet_description,
      snippet_id,
    ]
  );
  return results.rows[0];
}

// query database to delete customer by id

async function deleteSnippet(id) {
  const results = await query(
    `DELETE FROM snippets WHERE snippet_id = $1 RETURNING *;`,
    [id]
  );
  return results.rows[0];
}

// export all the functions
module.exports = {
  getSnippets,
  getByTitle,
  getSnippetByID,
  getSnippetByComment,
  createSnippet,
  updateSnippet,
  deleteSnippet,
};
