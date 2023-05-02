const express = require("express");
const router = express.Router();
const logoRouter = require("./logoRouter");
const contentRouter = require("./contentRouter");
const buttonRouter = require("./buttonRouter");

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.use("/logo", logoRouter);
router.use("/content", contentRouter);
router.use("/button", buttonRouter);

module.exports = router;
