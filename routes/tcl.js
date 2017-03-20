var express = require('express');
var router = express.Router();

/* GET random. */
router.get('/random/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
