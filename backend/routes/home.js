const express = require("express");
const { home } = require("nodemon/lib/utils");
const router = express.Router();

router.get('/', (req, res) =>
{
  res.send("Hi this is home page")
})

module.exports = router