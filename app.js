// Import express.. DONE!
// Import morgan.. DONE!
// Assign app to express that has been imported..DONE!
// Assign the port to 3000..DONE!
// Import the code snippet router..DONE!
// Console.log that server is running on port3000..DONE!

const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.port || 3000;

const codeRouter = require('./routes/code_snippets.js');

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use('/api/codesnippet', codeRouter);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
