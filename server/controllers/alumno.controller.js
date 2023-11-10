const alumnoCtrl = {};

alumnoCtrl.getAlumno = (req, res) => {
    res.json({
        status: 'Student goes here',
    });
}

// Ruta para agregar un nuevo alumno
alumnoCtrl.post('/api/alumnos', async (req, res) => {
    try {
      const nuevoAlumno = new Alumno(req.body);
      await nuevoAlumno.save();
      res.status(201).json(nuevoAlumno);
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar el alumno' });
    }
  });
  
  // Ruta para obtener todos los alumno
alumnoCtrl.get('/api/alumnos', async (req, res) => {
    try {
      const alumnos = await Alumno.find();
      res.status(200).json(alumnos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los alumnos' });
    }
  });


  // Ruta para eliminar un alumno
alumnoCtrl.delete('/api/alumnos/:id', async (req, res) => {
    try {
      const { numeroDeCuenta } = req.params;
      const resultado = await Alumno.deleteOne({ numeroDeCuenta });
      if (resultado.deletedCount === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Alumno no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el alumno' });
    }
  });

  
module.exports = alumnoCtrl;