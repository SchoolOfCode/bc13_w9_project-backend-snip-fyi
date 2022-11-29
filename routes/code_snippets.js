import express from "express"
const codeRouter = express.Router();

import {
  getSnippets, 
  getByTitle,
  getSnippetByID,
  getSnippetByComment,
  createSnippet,
  updateSnippet,
  deleteSnippet
} from "../models/code_snippets.js"


// Get code snippets by TITLE
codeRouter.get("/", async (req, res) => {
  if (req.query.search != undefined) {
    const result = await getByTitle(req.query.search);
    // const result = "test";
    res.json({
      success: true,
      payload: result,
    });
  } else {
    const result = await getSnippets();
    res.json({
      success: true,
      payload: result,
    });
  }
});

// get code snippets by comment id

codeRouter.get("/", async (req, res) => {
  if (req.query.comment_id != undefined) {
    res.json({
      success: true,
      payload: await getSnippetByComment(req.query.snippet_id),
    });
  } else {
    res.json({
      success: true,
      payload: await getSnippets(),
    });
  }
});

// Get code snippets by ID

codeRouter.get("/:id", async (req, res) => {
  const result = await getSnippetByID(req.params.id);
  res.json({
    success: true,
    payload: result,
  });
});

// POST code snippet

codeRouter.post("/", async (req, res) => {
  const result = await createSnippet(req.body);
  res.json({
    success: true,
    payload: result,
  });
});

// PATCH code snippet by ID

codeRouter.patch("/id", async (req, res) => {
  const result = await updateSnippet(req.params.id, req.body);
  res.json({
    success: true,
    payload: result,
  });
});

// Delete code snippet by ID

codeRouter.delete("/:id", async (req, res) => {
  const result = await deleteSnippet(req.params.id);
  console.log(result);
  res.json({
    success: true,
    payload: result,
  });
});

// Export routers..DONE!
export default codeRouter;
