const express = require("express");
const router = express.Router();
const Content = require("../../models/content");

router.get("/", async (req, res) => {
  const data = await Content.find({});
  res.json(data);
});

router.post("/", async (req, res) => {
  const newContent = await Content.create(req.body);
  await newContent.save();
  res.json(newContent);
});

module.exports = router;
