var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
  	{ title: 'Eat Fresh Prep' });
});

router.get('/menu', function(req, res) {
  res.render('menu', 
  	{ title: 'Eat Fresh Prep' });
});

module.exports = router;