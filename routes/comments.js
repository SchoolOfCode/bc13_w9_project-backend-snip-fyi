
import express from "express";
const commentRouter = express.Router();

import {
  getComments,
  getCommentsBySnippetId,
  createComment,
  deleteComment,
 } from "../models/comments.js"

 // get comments by comment_id
commentRouter.get("/", async (req, res) => {
  try {
    res.json({
      success: true,
      payload: await getComments(req.params.id),
    }); 
  } catch (error) {
    console.log(error)
  }
});

// get all comments with the given snippet_id
commentRouter.get("/:id", async (req, res) => {
  try {
    const result = await getCommentsBySnippetId(req.params.id);
    res.json({
      success: true,
      payload: result,
    });
  } catch (error) {
    console.log(error)
  }
});

// Create new comment
commentRouter.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const result = await createComment(payload);
    res.json({
      success: true,
      payload: result,
    });
  } catch (error) {
    console.log(error)
  }
});

// Deleting comments by comment_id
commentRouter.delete("/:id", async (req, res) => {
  try {
    const result = await deleteComment(req.params.id);
    res.json({
      success: true,
      payload: result,
    });
  } catch (error) {
    console.log(error)
  }
});

export default commentRouter;
