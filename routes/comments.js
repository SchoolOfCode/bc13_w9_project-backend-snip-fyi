// import express

import express from "express";
const commentRouter = express.Router();

// const express = require("express");

// import routers

// import commentRouter from "express";

// importing our models from comments.js

// const {
//   getComments,
//   getCommentsBySnippetId,
//   createComment,
//   deleteComment,
// } = require("../models/comments.js");

import {
  getComments,
  getCommentsBySnippetId,
  createComment,
  deleteComment,
 } from "../models/comments.js"

// import getComments from "../models/comments.js"
// import getCommentsBySnippetId from "../models/comments.js"
// import createComment from "../models/comments.js"
// import deleteComment from "../models/comments.js"

// get comments by comment_id

commentRouter.get("/", async (req, res) => {
  res.json({
    success: true,
    payload: await getComments(req.params.id),
  });
});

// get all comments with the given snippet_id
commentRouter.get("/:id", async (req, res) => {
  const result = await getCommentsBySnippetId(req.params.id);
  res.json({
    success: true,
    payload: result,
  });
});

// Create new comment
commentRouter.post("/", async (req, res) => {
  const payload = req.body;
  const result = await createComment(payload);
  res.json({
    success: true,
    payload: result,
  });
});

// Deleting comments by comment_id
commentRouter.delete("/:id", async (req, res) => {
  const result = await deleteComment(req.params.id);
  res.json({
    success: true,
    payload: result,
  });
});
// export routers

// router needs its own semantic name

export default commentRouter;
// module.exports = commentRouter;
