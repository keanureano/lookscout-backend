require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRouter = require("./src/controllers/apiRouter");
const adminRouter = require("./src/controllers/adminRouter");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", adminRouter);
app.use("/api", apiRouter);

mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connected");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
