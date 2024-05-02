const { Alumno } = require('./db.config');

exports.getAlumnoConNota10 = async (req, res) => {
  try {
    const alumnoConNota10 = await Alumno.findOne({
      where: {
        nota: 10
      },
      attributes: ['dni', 'nombre', 'apellidos']
    });

    if (!alumnoConNota10) {
      return res.status(404).json({ message: 'No se encontró ningún alumno con nota 10.' });
    }

    return res.status(200).json(alumnoConNota10);
  } catch (error) {
    console.error('Error al buscar alumno con nota 10:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
};
