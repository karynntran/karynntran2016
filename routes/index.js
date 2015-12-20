var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'karynn elio tran' });
});

module.exports = router;


// var express = require('express');
// var router = express.Router();
// var fs = require('fs');
// var file = __dirname + '/config.json';
// fs.readFile(file, 'utf8', function (err, data) {
//   if (err) {
//     console.log('Error: ' + err);
//     return;
//   }
//   jsonData = JSON.parse(data);
// });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'karynn elio tran', script: jsonData.script});
// });

// router.get('/jsonData', function(req, res){
//   res.send(jsonData);
// });


// module.exports = router;
