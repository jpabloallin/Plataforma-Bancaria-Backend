//CONEXION BD

const mongoose = require('mongoose')

const usuario = 'PlataformaBancaria'
const pass = 'VgrFVFCjVk4CsRWM'
const nombre_bd = 'PlataformaBancaria'
const uri_bd = `mongodb+srv://${usuario}:${pass}@plataforma.mxny4.mongodb.net/${nombre_bd}?retryWrites=true&w=majority`

mongoose.connect(uri_bd)
.then(() => console.log('Base de datos conectada'))
.catch((e) => console.log('Error: ', e))

module.exports = mongoose