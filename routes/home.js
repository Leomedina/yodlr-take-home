var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('home');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

module.exports = router;