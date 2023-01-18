const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "--" + Date.now());
  },
});

exports.upload = multer({ storage: fileStorage });

