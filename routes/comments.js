// import express

const express = require("express");

// import routers

const commentRouter = express.Router();

// importing our models from comments.js

const { getComments, deleteComment } = require("../models/comments.js");

// get comments by comment_id

commentRouter.get("/:id", async (req, res) => {
  res.json({
    success: true,
    payload: await getComments(req.params.id),
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
module.exports = commentRouter;