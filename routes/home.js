var express = require('express');
var router = express.Router();
var users = require('../init_data.json').data;
var _ = require('lodash');

router.get('/', function (req, res) {
  res.render('home');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

router.get('/admin', function (req, res) {
  const usersArray = _.toArray(users);
  res.render('admin', {users: usersArray});
});

module.exports = router;