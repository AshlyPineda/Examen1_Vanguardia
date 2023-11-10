const mongoose = require('mongoose');
const { Schema } = mongoose;

const alumnoSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true
    },
    seccion: {
        type: String,
        required: true
    }
});

module.export = mongoose.model('alumno', alumnoSchema);