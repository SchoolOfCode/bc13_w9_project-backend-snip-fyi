// Import express..DONE!
// Import routers..DONE!
const express = require("express");
const codeRouter = express.Router();

// Importing routers to our models
const {
  getByTitle,
  createSnippet,
  updateSnippet,
  deleteSnippet,
} = require("../models/code_snippets.js");


// Get code snippets by TITLE
codeRouter.get("/", async (req, res) => {
 if (req.query.search != undefined) {
     const result = await getByTitle(req.query.search);
    // const result = "test"
    res.json({
      success: true,
      payload: result,
    });
  }
});

// Get code snippets by ID

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
  })
});

// Delete code snippet by ID

codeRouter.delete("/id", async (req, res) => {
  const result = await deleteSnippet(req.params.id);
  res.json({
    success: true,
    payload: result
  })
})

// Export routers..DONE!
module.exports = codeRouter;
