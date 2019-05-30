var express = require('express');
var usuarioRouter = express.Router();

usuarioRouter.get('/', function (req, res) {
  res.render('dashboard', {usuario:req.session.usuario});
});

usuarioRouter.get('/about', function (req, res) {
  res.send('About this wiki');
});


module.exports = usuarioRouter;