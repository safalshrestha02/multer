const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const upload = require("./middleware/multerMiddleware").upload;
const uploadedFiles = require("./routes/upload");

app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.use("/upload", upload.array("myFiles", 23), uploadedFiles);

app.listen(4000);
