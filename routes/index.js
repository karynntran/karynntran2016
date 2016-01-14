var express = require('express');
var router = express.Router();
var json = require('./config.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'karynn elio tran', rubixData: json['index'][1]['blocks']['rubix']});
});

// router.get('/jsonData', function(req, res){
//   res.send(jsonData);
// });

module.exports = router;


// var express = require('express');
// var router = express.Router();


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'karynn elio tran', script: jsonData.script});
// });




// module.exports = router;
