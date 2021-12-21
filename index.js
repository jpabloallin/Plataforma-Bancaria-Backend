const express = require('express');
const cors = require('cors');
const coleccion1 = require('./models/Usuario');

const app = express();
const puerto = 8000
const cors_config = {
    origin: 'http://localhost:3000'
}

const miFunct = async() => {
    const datos = await coleccion1.find()
    console.log(datos)
}

app.use('/',cors(cors_config), (req, res) => {
    res.json({
        mensaje: "renderizado de prueba"
    })
})    

app.listen(puerto, () => {
    console.log("Servidor listo para su uso")

})