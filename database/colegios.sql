-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2019 a las 12:28:12
-- Versión del servidor: 10.1.29-MariaDB
-- Versión de PHP: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `colegios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acudiente`
--

CREATE TABLE `acudiente` (
  `id_acudiente` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acudiente_has_estudiante`
--

CREATE TABLE `acudiente_has_estudiante` (
  `acudiente_id_acudiente` int(11) NOT NULL,
  `estudiante_idestudiante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acuerdo`
--

CREATE TABLE `acuerdo` (
  `idacuerdo` int(11) NOT NULL,
  `acuerdocol` varchar(455) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE `asignatura` (
  `idasignatura` int(11) NOT NULL,
  `nombre_asignatura` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`idasignatura`, `nombre_asignatura`) VALUES
(2, 'matematica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `idcita` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `lugar` varchar(45) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `acudiente_id_acudiente` int(11) NOT NULL,
  `acuerdo_idacuerdo` int(11) NOT NULL,
  `reporte_idreporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `director_grupo`
--

CREATE TABLE `director_grupo` (
  `iddirector_grupo` int(11) NOT NULL,
  `usuario_id_direct` int(11) NOT NULL,
  `grupo_idgrupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estimulo`
--

CREATE TABLE `estimulo` (
  `idestimulo` int(11) NOT NULL,
  `estimulo` varchar(45) DEFAULT NULL,
  `observacion_idobservacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `idestudiante` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `grupo_idgrupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`idestudiante`, `nombre`, `apellido`, `grupo_idgrupo`) VALUES
(2, 'Anderson', 'H', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evidencia`
--

CREATE TABLE `evidencia` (
  `idevidencia` int(11) NOT NULL,
  `evidenciacol` varchar(45) NOT NULL,
  `foto` blob,
  `reporte_idreporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado`
--

CREATE TABLE `grado` (
  `idgrado` int(11) NOT NULL,
  `grado` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grado`
--

INSERT INTO `grado` (`idgrado`, `grado`) VALUES
(2, '5to');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `idgrupo` int(11) NOT NULL,
  `salon` varchar(45) NOT NULL,
  `grado_idgrado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`idgrupo`, `salon`, `grado_idgrado`) VALUES
(2, 'SNS 103', 2),
(3, 'SNS 202', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `observacion`
--

CREATE TABLE `observacion` (
  `idobservacion` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `tipo_observacion_idtipo_observacion` int(11) NOT NULL,
  `estudiante_idestudiante` int(11) NOT NULL,
  `reporte_idreporte` int(11) DEFAULT NULL,
  `vision_idvision` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `observacion`
--

INSERT INTO `observacion` (`idobservacion`, `fecha`, `descripcion`, `tipo_observacion_idtipo_observacion`, `estudiante_idestudiante`, `reporte_idreporte`, `vision_idvision`, `usuario_id`) VALUES
(1, '1996-12-10', 'asd', 1, 2, NULL, 1, 2),
(3, '1996-12-13', 'sdaXD', 2, 2, NULL, 1, 2),
(4, '0626-03-31', 'asdad', 1, 2, NULL, 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `idreporte` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `tipo_reporte_idtipo_reporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_observacion`
--

CREATE TABLE `tipo_observacion` (
  `idtipo_observacion` int(11) NOT NULL,
  `observacion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_observacion`
--

INSERT INTO `tipo_observacion` (`idtipo_observacion`, `observacion`) VALUES
(1, 'buena'),
(2, 'mala');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_reporte`
--

CREATE TABLE `tipo_reporte` (
  `idtipo_reporte` int(11) NOT NULL,
  `reporte` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_reporte`
--

INSERT INTO `tipo_reporte` (`idtipo_reporte`, `reporte`) VALUES
(1, 'tipo 1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `idtipo_usuario` int(11) NOT NULL,
  `nombre_tipo_usuario` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`idtipo_usuario`, `nombre_tipo_usuario`) VALUES
(2, 'Profesor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `telefono` int(11) DEFAULT NULL,
  `tipo_usuario_idtipo_usuario` int(11) NOT NULL,
  `documento` int(11) NOT NULL,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `direccion`, `correo`, `telefono`, `tipo_usuario_idtipo_usuario`, `documento`, `password`) VALUES
(2, 'Kevin', 'Urieles', 'cra 7', 'admin', 6565, 2, 5454155, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_asignatura_grupo`
--

CREATE TABLE `usuario_asignatura_grupo` (
  `usuario_id` int(11) NOT NULL,
  `asignatura_idasignatura` int(11) NOT NULL,
  `grupo_idgrupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario_asignatura_grupo`
--

INSERT INTO `usuario_asignatura_grupo` (`usuario_id`, `asignatura_idasignatura`, `grupo_idgrupo`) VALUES
(2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vision`
--

CREATE TABLE `vision` (
  `idvision` int(11) NOT NULL,
  `nivel` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `vision`
--

INSERT INTO `vision` (`idvision`, `nivel`) VALUES
(1, 'publica'),
(2, 'privada'),
(4, 'protegida');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acudiente`
--
ALTER TABLE `acudiente`
  ADD PRIMARY KEY (`id_acudiente`);

--
-- Indices de la tabla `acudiente_has_estudiante`
--
ALTER TABLE `acudiente_has_estudiante`
  ADD KEY `fk_acudiente_has_estudiante_acudiente1_idx` (`acudiente_id_acudiente`),
  ADD KEY `fk_acudiente_has_estudiante_estudiante1_idx` (`estudiante_idestudiante`);

--
-- Indices de la tabla `acuerdo`
--
ALTER TABLE `acuerdo`
  ADD PRIMARY KEY (`idacuerdo`);

--
-- Indices de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`idasignatura`);

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`idcita`),
  ADD KEY `fk_cita_usuario1_idx` (`usuario_id`),
  ADD KEY `fk_cita_acudiente1_idx` (`acudiente_id_acudiente`),
  ADD KEY `fk_cita_acuerdo1_idx` (`acuerdo_idacuerdo`),
  ADD KEY `fk_cita_reporte1_idx` (`reporte_idreporte`);

--
-- Indices de la tabla `director_grupo`
--
ALTER TABLE `director_grupo`
  ADD PRIMARY KEY (`iddirector_grupo`),
  ADD KEY `fk_director_grupo_usuario1_idx` (`usuario_id_direct`),
  ADD KEY `fk_director_grupo_grupo1_idx` (`grupo_idgrupo`);

--
-- Indices de la tabla `estimulo`
--
ALTER TABLE `estimulo`
  ADD PRIMARY KEY (`idestimulo`),
  ADD KEY `fk_estimulo_observacion1_idx` (`observacion_idobservacion`);

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`idestudiante`),
  ADD KEY `fk_estudiante_grupo1_idx` (`grupo_idgrupo`);

--
-- Indices de la tabla `evidencia`
--
ALTER TABLE `evidencia`
  ADD PRIMARY KEY (`idevidencia`),
  ADD KEY `fk_evidencia_reporte1_idx` (`reporte_idreporte`);

--
-- Indices de la tabla `grado`
--
ALTER TABLE `grado`
  ADD PRIMARY KEY (`idgrado`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`idgrupo`),
  ADD KEY `fk_grupo_grado1_idx` (`grado_idgrado`);

--
-- Indices de la tabla `observacion`
--
ALTER TABLE `observacion`
  ADD PRIMARY KEY (`idobservacion`),
  ADD KEY `fk_observacion_tipo_observacion1_idx` (`tipo_observacion_idtipo_observacion`),
  ADD KEY `fk_observacion_estudiante1_idx` (`estudiante_idestudiante`),
  ADD KEY `fk_observacion_reporte1_idx` (`reporte_idreporte`),
  ADD KEY `fk_observacion_vision1_idx` (`vision_idvision`),
  ADD KEY `fk_observacion_usuario1_idx` (`usuario_id`);

--
-- Indices de la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`idreporte`),
  ADD KEY `fk_reporte_tipo_reporte1_idx` (`tipo_reporte_idtipo_reporte`);

--
-- Indices de la tabla `tipo_observacion`
--
ALTER TABLE `tipo_observacion`
  ADD PRIMARY KEY (`idtipo_observacion`);

--
-- Indices de la tabla `tipo_reporte`
--
ALTER TABLE `tipo_reporte`
  ADD PRIMARY KEY (`idtipo_reporte`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`idtipo_usuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `documento_usuario_UNIQUE` (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`documento`),
  ADD UNIQUE KEY `correo_UNIQUE` (`correo`),
  ADD KEY `fk_usuario_tipo_usuario_idx` (`tipo_usuario_idtipo_usuario`);

--
-- Indices de la tabla `usuario_asignatura_grupo`
--
ALTER TABLE `usuario_asignatura_grupo`
  ADD KEY `fk_usuario_asignatura_grupo_usuario1_idx` (`usuario_id`),
  ADD KEY `fk_usuario_asignatura_grupo_asignatura1_idx` (`asignatura_idasignatura`),
  ADD KEY `fk_usuario_asignatura_grupo_grupo1_idx` (`grupo_idgrupo`);

--
-- Indices de la tabla `vision`
--
ALTER TABLE `vision`
  ADD PRIMARY KEY (`idvision`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acudiente`
--
ALTER TABLE `acudiente`
  MODIFY `id_acudiente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `acuerdo`
--
ALTER TABLE `acuerdo`
  MODIFY `idacuerdo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  MODIFY `idasignatura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `idcita` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `director_grupo`
--
ALTER TABLE `director_grupo`
  MODIFY `iddirector_grupo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estimulo`
--
ALTER TABLE `estimulo`
  MODIFY `idestimulo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `idestudiante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `evidencia`
--
ALTER TABLE `evidencia`
  MODIFY `idevidencia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grado`
--
ALTER TABLE `grado`
  MODIFY `idgrado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `idgrupo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `observacion`
--
ALTER TABLE `observacion`
  MODIFY `idobservacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `idreporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tipo_observacion`
--
ALTER TABLE `tipo_observacion`
  MODIFY `idtipo_observacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipo_reporte`
--
ALTER TABLE `tipo_reporte`
  MODIFY `idtipo_reporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `idtipo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `vision`
--
ALTER TABLE `vision`
  MODIFY `idvision` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acudiente_has_estudiante`
--
ALTER TABLE `acudiente_has_estudiante`
  ADD CONSTRAINT `fk_acudiente_has_estudiante_acudiente1` FOREIGN KEY (`acudiente_id_acudiente`) REFERENCES `acudiente` (`id_acudiente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_acudiente_has_estudiante_estudiante1` FOREIGN KEY (`estudiante_idestudiante`) REFERENCES `estudiante` (`idestudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `fk_cita_acudiente1` FOREIGN KEY (`acudiente_id_acudiente`) REFERENCES `acudiente` (`id_acudiente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cita_acuerdo1` FOREIGN KEY (`acuerdo_idacuerdo`) REFERENCES `acuerdo` (`idacuerdo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cita_reporte1` FOREIGN KEY (`reporte_idreporte`) REFERENCES `reporte` (`idreporte`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cita_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `director_grupo`
--
ALTER TABLE `director_grupo`
  ADD CONSTRAINT `fk_director_grupo_grupo1` FOREIGN KEY (`grupo_idgrupo`) REFERENCES `grupo` (`idgrupo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_director_grupo_usuario1` FOREIGN KEY (`usuario_id_direct`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `estimulo`
--
ALTER TABLE `estimulo`
  ADD CONSTRAINT `fk_estimulo_observacion1` FOREIGN KEY (`observacion_idobservacion`) REFERENCES `observacion` (`idobservacion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `fk_estudiante_grupo1` FOREIGN KEY (`grupo_idgrupo`) REFERENCES `grupo` (`idgrupo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `evidencia`
--
ALTER TABLE `evidencia`
  ADD CONSTRAINT `fk_evidencia_reporte1` FOREIGN KEY (`reporte_idreporte`) REFERENCES `reporte` (`idreporte`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD CONSTRAINT `fk_grupo_grado1` FOREIGN KEY (`grado_idgrado`) REFERENCES `grado` (`idgrado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `observacion`
--
ALTER TABLE `observacion`
  ADD CONSTRAINT `fk_observacion_estudiante1` FOREIGN KEY (`estudiante_idestudiante`) REFERENCES `estudiante` (`idestudiante`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_observacion_reporte1` FOREIGN KEY (`reporte_idreporte`) REFERENCES `reporte` (`idreporte`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `fk_observacion_tipo_observacion1` FOREIGN KEY (`tipo_observacion_idtipo_observacion`) REFERENCES `tipo_observacion` (`idtipo_observacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_observacion_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_observacion_vision1` FOREIGN KEY (`vision_idvision`) REFERENCES `vision` (`idvision`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD CONSTRAINT `fk_reporte_tipo_reporte1` FOREIGN KEY (`tipo_reporte_idtipo_reporte`) REFERENCES `tipo_reporte` (`idtipo_reporte`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_tipo_usuario` FOREIGN KEY (`tipo_usuario_idtipo_usuario`) REFERENCES `tipo_usuario` (`idtipo_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario_asignatura_grupo`
--
ALTER TABLE `usuario_asignatura_grupo`
  ADD CONSTRAINT `fk_usuario_asignatura_grupo_asignatura1` FOREIGN KEY (`asignatura_idasignatura`) REFERENCES `asignatura` (`idasignatura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuario_asignatura_grupo_grupo1` FOREIGN KEY (`grupo_idgrupo`) REFERENCES `grupo` (`idgrupo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuario_asignatura_grupo_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
