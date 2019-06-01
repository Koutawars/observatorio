var express = require('express');
var usuarioRouter = express.Router();
const EstudiantesRepository = require('./../models/repository/EstudiantesRepository.js');
const ObservacionesRepository = require('./../models/repository/ObservacionesRepository.js');
const VisionRepository = require('./../models/repository/VisionRepository.js');
const TipoObsRepository = require('./../models/repository/TipoObsRepository.js');
const ReporteRepository = require('./../models/repository/ReporteRepository.js');
const TipoReporteRepository = require('../models/repository/TipoReporteRepository.js');


const security = require('./../security.js');

let estudiantesRepository = new EstudiantesRepository();
let observacionesRepository = new ObservacionesRepository();
let visionRepository = new VisionRepository();
let tipoObsRepository = new TipoObsRepository();
let reporteRepository = new ReporteRepository();
let tipoReporteRepository = new TipoReporteRepository();

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
  let observaciones = await observacionesRepository.getObservaciones(estudiante.idestudiante, req.session.usuario.id);
  let tipoVision = await visionRepository.getVisiones();
  let tipoObs = await tipoObsRepository.getTipoObs();
  let tipoReporte = await tipoReporteRepository.getTipoReporte();
  let reportes = await reporteRepository.getReportes(id);
  console.log(reportes);

  res.render('estudiante', {
    usuario:req.session.usuario, 
    estudiante, 
    observaciones,
    tipoVision,
    tipoObs,
    tipoReporte,
    reportes
  });
});

usuarioRouter.post('/estudiante/:id/add', async function (req, res) {
  let id = req.params.id;
  let usuario_id = req.session.usuario.id;
  let observacion = {
    fecha: req.body.fecha, 
    descripcion: req.body.contenido, 
    tipo_observacion_id: req.body.tipo,
    estudiante_idestudiante: id,
    vision_idvision: req.body.visiblidad,
    usuario_id
  };
  observacion = await observacionesRepository.SetObservacion(observacion).catch(e => {
    console.log(e);
  });
  res.end(JSON.stringify(observacion));
});

usuarioRouter.get('/estudiante/:id/sinReporte', async function (req, res) {
  let id = req.params.id;
  let observaciones = await observacionesRepository.getObservacionesNoReporte(id).catch(e => {
    console.log(e);
  });
  res.end(JSON.stringify(observaciones));
});

usuarioRouter.post('/estudiante/:id/addReporte', async function (req, res) {
  let reporte = await reporteRepository.SetReporte(req.body.tipoReporte);
  req.body.observaciones.forEach(async (e) => {
    await observacionesRepository.UpdateObservacion(reporte, e);
  });
  let retornar = await observacionesRepository.getReportesById(reporte);
  res.end(JSON.stringify(retornar));
});

module.exports = usuarioRouter;