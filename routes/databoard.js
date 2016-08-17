var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('databoard', { title: 'Tranquility-Databoard-ECE' });
});

module.exports = router;
