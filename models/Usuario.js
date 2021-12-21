const  mongoose = require('../db/Basedatos')

const Schema = mongoose.Schema

const coleccion1Schema = new Schema({
    nombre_completo: String,
    tipo_documento: String,
    numero_documento: Number,
    ciudad: String,
    contraseña: Number,
    correo: String,
    fecha_expedicion: String,
    fecha_nacimiento: String,
    residencia: String
})

const Coleccion1 = mongoose.model('coleccion1', coleccion1Schema)

module.exports = Coleccion1