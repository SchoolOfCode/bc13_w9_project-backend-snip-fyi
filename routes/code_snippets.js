// Import express..DONE!
// Import routers..DONE!
// Export routers..DONE!
// getAllByTitle

const express = require("express");
const codeRouter = express.Router();

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

module.exports = codeRouter;
