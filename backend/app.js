const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const fileUpload = require("express-fileupload");
const path = require("path");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const app = express();

const api = require("./routes/api");

app.use(fileUpload());

mongoose
  .connect(process.env.dbURI)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(express.json());
app.use("/api", api);
app.get("/app", function (req, res) {
  res.send("From app.js");
});
app.get("/healthCheck", function (req, res) {
  res.send({ status: "OK" });
});

app.listen(process.env.PORT, function () {
  console.log("Server running on localhost : " + process.env.PORT);
});
