const express = require("express");
const router = express.Router();
const Content = require("../../models/content");

router.get("/", async (req, res) => {
  const data = await Content.find({});
  const prettyData = JSON.stringify(data, null, 2);
  res.setHeader("Content-Type", "application/json");
  res.send(prettyData);
});

router.post("/", async (req, res) => {
  const newContent = await Content.create(req.body);
  await newContent.save();
  res.json(newContent);
});

module.exports = router;
