const express = require("express");
const router = express.Router();
const Button = require("../../models/button");

router.get("/", async (req, res) => {
  const data = await Button.find({});
  const prettyData = JSON.stringify(data, null, 2);
  res.setHeader("Content-Type", "application/json");
  res.send(prettyData);
});

router.post("/", async (req, res) => {
  await Button.deleteMany({});
  const newButton = await Button.create(req.body);
  await newButton.save();
  res.redirect("/api/");
});

module.exports = router;
