const mongoose = require("mongoose");

const buttonSchema = new mongoose.Schema({
  text: String,
});

const Button = mongoose.model("Button", buttonSchema);

module.exports = Button;
