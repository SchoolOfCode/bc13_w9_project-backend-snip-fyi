import query from "../db/index.js";

/**
 * @returns all code snippets
 */
export async function getSnippets() {
  try {
    const results = await query(`SELECT * FROM snippets`);
    return results.rows;
  } catch (error) {
    console.log(error);
  }
}
/**
 * @param {*} searchTerm
 * @returns code snippets by title
 */
export async function getByTitle(searchTerm) {
  try {
    const results = await query(
      `SELECT * FROM snippets WHERE snippet_title ILIKE $1`,
      [`%${searchTerm}%`]
    );
    return results.rows;
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param {*} snippet_id
 * @returns code snippets by snippets_id
 */
export async function getSnippetByID(snippet_id) {
  try {
    const results = await query(
      `SELECT * FROM snippets WHERE snippet_id = $1`,
      [snippet_id]
    );
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param {*} comment_id
 * @returns code snippets by comments_id
 */
export async function getSnippetByComment(comment_id) {
  try {
    const results = await query(
      `SELECT * FROM snippets WHERE comment_id = $1`,
      [comment_id]
    );
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param {*} snippet
 * @returns created code snippet
 */
export async function createSnippet(snippet) {
  try {
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
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param {*} snippet_id
 * @param {*} updates
 * @returns updated code snippet by snippet_id
 */
export async function updateSnippet(snippet_id, updates) {
  try {
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
  } catch (error) {
    console.log(error);
  }
}

/**
 * @param {*} id
 * @returns deleted snippet by snippet_id
 */
export async function deleteSnippet(id) {
  try {
    const results = await query(
      `DELETE FROM snippets WHERE snippet_id = $1 RETURNING *;`,
      [id]
    );
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }
}
