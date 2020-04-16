const libExpress = require('express');
const enrutador = libExpress.Router();


const manejadorRaiz = function (peticion,respuesta){
    respuesta.render('index.html', {titulo: 'Mi primera pagina'});
}
const manejadorContact = function (peticion,respuesta){
    respuesta.render('contactos.html', {titulo: 'Pagina de contactos'});
}


enrutador.get('/',manejadorRaiz);
enrutador.get('/contactos',manejadorContact);


module.exports = enrutador;