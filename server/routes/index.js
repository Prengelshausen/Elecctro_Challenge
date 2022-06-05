const express = require('express');
const router = express.Router();
const db = require('../db/connect')

/* GET home page. */
router.get('/getTodos', function(req, res, next) {
  db.select().from('todos').then(function(data) {
    res.send(data);
  })
});

module.exports = router;
