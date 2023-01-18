const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "--" + Date.now());
  },
});

const filter = (req, file, cb) => {
  // Allowing only jpeg and png files
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

exports.upload = multer({ storage: fileStorage, fileFilter: filter });
