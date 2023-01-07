var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/test", (req, res) => {
  const request = req.query.name;
  res.send("Test Route " + request);
});
router.get("/test2", (req, res) => {
  res.send("Test Route");
});

module.exports = router;
