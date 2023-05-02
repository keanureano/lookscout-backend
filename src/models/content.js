const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
