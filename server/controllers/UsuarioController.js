var express = require('express');
var usuarioRouter = express.Router();
const EstudiantesRepository = require('./../models/repository/EstudiantesRepository.js');
const ObservacionesRepository = require('./../models/repository/ObservacionesRepository.js');

estudiantesRepository = new EstudiantesRepository();
observacionesRepository = new ObservacionesRepository();

usuarioRouter.get('/', function (req, res) {
  res.render('dashboard', {usuario:req.session.usuario});
});

usuarioRouter.get('/grupos', function (req, res) {
  res.render('grupos', {usuario:req.session.usuario});
});

usuarioRouter.get('/grupos/:idGrupo', async function (req, res) {
  let idGrupo = req.params.idGrupo;
  let grupo = await estudiantesRepository.getEstudiantesCurso(idGrupo).catch((e) => {
    res.status(404).render('404');
  });
  res.render('grupo', {usuario:req.session.usuario, grupo});
});

usuarioRouter.get('/estudiante/:id', async function (req, res) {
  let id = req.params.id;
  let estudiante = await estudiantesRepository.getOne(id).catch((e) => {
    res.status(404).render('404');
  });
  let observaciones = await observacionesRepository.getObservaciones(estudiante.idestudiante);
  res.render('estudiante', {usuario:req.session.usuario, estudiante, observaciones});
});


module.exports = usuarioRouter;