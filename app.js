// Import express.. DONE!
// Import morgan.. DONE!
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Assign app to express that has been imported..DONE!
const app = express();
const PORT = process.env.PORT || 5000;

// importing the routers
import codeRouter from "./routes/code_snippets.js";
import commentRouter from "./routes/comments.js";

// CORS is used to connect front-end to the back-end
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

// middleware routing
app.use("/api/codesnippet", codeRouter);
app.use("/api/codecomment", commentRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
