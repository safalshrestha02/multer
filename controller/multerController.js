exports.multerController = (req, res) => {
  console.log(req.files);
  res.send("uploaded");
};
