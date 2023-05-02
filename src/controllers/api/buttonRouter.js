const express = require("express");
const router = express.Router();
const Button = require("../../models/button");

router.get("/", async (req, res) => {
  const button = await Button.find({});
  res.json(button);
});

router.post("/", async (req, res) => {
  await Button.deleteMany({});
  const newButton = await Button.create(req.body);
  await newButton.save(newButton);
  res.redirect("/api/");
});

module.exports = router;
