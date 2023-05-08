require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRouter = require("./src/controllers/api");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

const frontendDir = __dirname + "/frontend/dist/";
app.use(express.static(frontendDir));
app.get("*", (req, res) => {
  res.sendFile(frontendDir + "index.html");
});

mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
