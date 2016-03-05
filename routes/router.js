var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res){
    res.render('index');
});

// router.get('/navigation', function(req, res, next) {
//   res.render('navigation', { navigationData: json['navigation'][0]['blocks']['nav']});
// });

// router.get('/about', function(req, res, next) {
//   res.render('about', { data: siteData});
// });

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
