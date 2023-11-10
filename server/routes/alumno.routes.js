const express = require('express');
const router = express.Router();

const alum = require('../controllers/alumno.controller');

router.get('/', alum.getAlumno);
router.post('/', alum.createAlumno);
router.delete('/:id', alum.deleteAlumno);

module.exports = router;