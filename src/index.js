const express = require('express');




const manejador = function(error, datos){

}
const manejadorServidor = function(){
    console.log("Server funciona!!  puerto: "+servidor.get('puerto'));
}
const manejadorRaiz = function(peticion,respuesta){
    respuesta.send('Hola mundo');
}


//



//inicializacion
const servidor = express(manejador);
//variables
        servidor.set('puerto', 4000);  //asi se hace una var global del server


//middlewares (concepto express) funciones que se ejecutan antes de que las rutas procesen algo


//rutas
servidor.get('/',manejadorRaiz);  //Si me piden la ruta raiz responder...

//Archivos estaticos ejp imagenes a enviar




// El server se queda escuchando ese puerto, a la espera de peticiones
servidor.listen(servidor.get('puerto'),manejadorServidor);

