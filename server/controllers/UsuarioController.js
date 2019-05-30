var express = require('express');
var usuarioRouter = express.Router();

usuarioRouter.get('/', function (req, res) {
  res.send('Wiki home page');
});

usuarioRouter.get('/about', function (req, res) {
  res.send('About this wiki');
});


module.exports = usuarioRouter;