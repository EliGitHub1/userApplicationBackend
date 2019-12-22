const express = require("express");
const router = express.Router();

router.get("/health", (req, res) =>
  res.json({
    msg: "Users page works as expected"
  })
);

module.exports = router;
