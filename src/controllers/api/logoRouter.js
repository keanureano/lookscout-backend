const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/uploads/logo");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + ".png");
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  const logoImagePath = process.cwd() + "/uploads/logo/logo.png";
  res.sendFile(logoImagePath);
});

router.post("/", upload.single("logo"), (req, res) => {
  console.log(req.file, req.originalUrl);
  res.redirect("/api");
});

module.exports = router;
