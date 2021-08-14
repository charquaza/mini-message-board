var express = require('express');
var router = express.Router();

var messages = [
  {
    text: "Hello World!",
    user: "Java",
    added: new Date()
  },
  {
    text: "Who am I?",
    user: "Merlin",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  var messageData = req.body;

  messages.push(
    {
      text: messageData.text,
      user: messageData.user,
      added: new Date()
    }
  );

  res.redirect('/');
});

module.exports = router;
