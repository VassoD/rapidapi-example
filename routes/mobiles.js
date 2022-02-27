var express = require('express');
var router = express.Router();
var mobiles = require('../data/mobiles');

/* GET mobiles listing. */
router.get('/', function(req, res, next) {
  res.json({ mobiles });
});

module.exports = router;