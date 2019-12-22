const express = require("express");
const users = require("./routes/api/users");

const app = express();

app.get("/", (req, res) =>
  res.send("Hello World! I am Eli writing in Node.js for the first time!")
);

app.use("/api/users", users);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
