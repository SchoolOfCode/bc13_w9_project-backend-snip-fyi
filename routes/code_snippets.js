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
  try {
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
  } catch (error) {
    console.log(error)
  }
});

// get code snippets by comment id

codeRouter.get("/", async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error)
  }
});

// Get code snippets by ID

codeRouter.get("/:id", async (req, res) => {
  try {
    const result = await getSnippetByID(req.params.id);
    res.json({
      success: true,
      payload: result,
    });
  } catch (error) {
    console.log(error)
  }
});

// POST code snippet

codeRouter.post("/", async (req, res) => {
  try {
    const result = await createSnippet(req.body);
    res.json({
      success: true,
      payload: result,
    });
  } catch (error) {
    console.log(error)
  }
});

// PATCH code snippet by ID

codeRouter.patch("/id", async (req, res) => {
  try {
    const result = await updateSnippet(req.params.id, req.body);
    res.json({
      success: true,
      payload: result,
    });
  } catch (error) {
    console.log(error)
  }
});

// Delete code snippet by ID

codeRouter.delete("/:id", async (req, res) => {
  try {
    const result = await deleteSnippet(req.params.id);
    console.log(result);
    res.json({
      success: true,
      payload: result,
    });
  } catch (error) {
    console.log(error)
  }
});

export default codeRouter;
