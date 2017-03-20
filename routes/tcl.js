'use strict';

const express = require('express');
const router = express.Router();
const TCL = require('../lib/tcl');

/* POST random. */
router.post('/random/', function (req, res, next) {

  TCL.random()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
