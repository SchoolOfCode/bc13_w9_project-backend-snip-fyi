
import query from "../db/index.js";

/**
 * 
 * @returns all comments by id
 */
// query comment table to return all comments by id
export async function getComments() {
  try {
    const results = await query(`SELECT * FROM comments;`);
    return results.rows;
  } catch (error) {
    console.log(error)    
  }
}

/**
 * 
 * @param {*} id 
 * @returns deleted comments by comment_id
 */
//Query comment table to delete comment by ID
export async function deleteComment(id) {
  try {
    const results = await query(`DELETE FROM comments WHERE comment_id = $1`, [
      id,
    ]);
    return results.rows[0];
  } catch (error) {
    console.log(error)
  }
}

/**
 * @param {*} comment_content
 * @param {*} snippet_id 
 * @param {*} comment_author
 * @param {*} comment_date_create 
 * @returns a new created comment
 */
export async function createComment({
  snippet_id,
  comment_content,
  comment_author,
  comment_date_create,
}) {
  try {
    const result = await query(
      `INSERT INTO comments (snippet_id, comment_content, comment_author, comment_date_create) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [snippet_id, comment_content, comment_author, comment_date_create]
    );
    return result.rows[0];
  } catch (error) {
    console.log(error)
  }
}

/**
 * @param {*} id 
 * @returns comments by snippet_id
 */
export async function getCommentsBySnippetId(id) {
  try {
    const results = await query(
      `SELECT *
    FROM comments WHERE snippet_id = $1`,
      [id]
    );
    return results.rows;
  } catch (error) {
    console.log(error)
  }
}
