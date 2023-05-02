require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./src/controllers/api");
const adminRouter = require("./src/controllers/admin");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("tiny"));
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
