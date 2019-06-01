var express = require('express');
var usuarioRouter = express.Router();
const EstudiantesRepository = require('./../models/repository/EstudiantesRepository.js');
const ObservacionesRepository = require('./../models/repository/ObservacionesRepository.js');
const VisionRepository = require('./../models/repository/VisionRepository.js');
const TipoObsRepository = require('./../models/repository/TipoObsRepository.js');


const security = require('./../security.js');

let estudiantesRepository = new EstudiantesRepository();
let observacionesRepository = new ObservacionesRepository();
let visionRepository = new VisionRepository();
let tipoObsRepository = new TipoObsRepository();

usuarioRouter.get('/', function (req, res) {
  res.render('dashboard', {usuario:req.session.usuario});
});

usuarioRouter.get('/grupos', security.profesor, function (req, res) {
  res.render('grupos', {usuario:req.session.usuario});
});

usuarioRouter.get('/grupos/:idGrupo', security.profesor, async function (req, res) {
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
  let tipoVision = await visionRepository.getVisiones();
  let tipoObs = await tipoObsRepository.getTipoObs();
  res.render('estudiante', {
    usuario:req.session.usuario, 
    estudiante, 
    observaciones,
    tipoVision,
    tipoObs
  });
});


module.exports = usuarioRouter;