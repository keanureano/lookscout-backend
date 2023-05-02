const express = require("express");
const router = express.Router();
const logoRouter = require("./logoRouter");



router.get("/", (req, res) => {
  res.json({ message: "api index" });
});

router.use("/logo", logoRouter);

module.exports = router;
