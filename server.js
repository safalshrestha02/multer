const express = require("express");
const app = express();
const path = require("path");

const upload = require("./middleware/multerMiddleware").upload;
const uploadedFiles = require("./routes/upload");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

app.use("/upload", upload.array("myFiles", 23), uploadedFiles);

app.listen(4000);
