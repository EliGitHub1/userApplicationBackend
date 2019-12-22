const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.send("Hello World! I am Eli writing in Node.js for the first time")
);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
