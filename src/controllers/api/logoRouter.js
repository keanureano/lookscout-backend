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
  res.sendFile(process.cwd() + "/uploads/logo/logo.png");
});

router.post("/", upload.single("logo"), (req, res) => {
  console.log(req.file, req.originalUrl);
  res.redirect("/");
});

module.exports = router;
