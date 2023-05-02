const express = require("express");
const router = express.Router();
const Content = require("../../models/content");

router.get("/", async (req, res) => {
  const data = await Content.find({});
  res.json(data);
});

module.exports = router;
