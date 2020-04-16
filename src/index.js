const libExpress = require('express');
const path = require('path');



const manejador = function(){

}
const manejadorServidor = function(){
    console.log("Server funciona!!  puerto: "+servidor.get('puerto')); 
}
const manejadorRaiz = function(peticion,respuesta){
    respuesta.render('index.ejs', {titulo: 'Mi primera pagina'});
        //respuesta.render('index.ejs'); //usamos render porque tiene que mandarlo a nuestro 'view engine' antes de enviarlo (puedes poner toda la ruta, o sino lo mira por defecto en el dir views)
        //respuesta.sendFile(path.join(__dirname,'/views/index.html')); //Mandamos el archivo que queramos, html u otro
    
        //respuesta.sendFile(path.join(__dirname,'/views/index.html')); //Mandamos el archivo que queramos, html u otro en este caso pre-procesado
        //respuesta.send(__dirname+'/views/index.html');   //__dirname miestra la dir de la carpeta actual (no se pueden poner relativas en esta funcion)
        //respuesta.send(path.join(__dirname,'/views/index.html'));  //Path nos ayuda porque depende del SO las barras van para un lado o el otro, el las cambia
}




//inicializacion
const servidor = libExpress(manejador);
const indiceRutas = require('./routes/index.js');

//variables
servidor.set('puerto', 4000);  //asi se hace una var global del server
servidor.set('views',path.join(__dirname,'views'));  //el directorio views deberia estar x defecto en el dir del proyecto, no dentro de src, x eso hace falta esta linea
//servidor.engine('html',require('ejs').renderFile);  Si quisieramos que los arch fueran html en vez de ejs
servidor.set('view engine','ejs');

//middlewares (concepto express) funciones que se ejecutan antes de que las rutas procesen algo


//rutas

servidor.use(indiceRutas); //importar archivo al server, rutas puede ser largo

    //servidor.get('/',manejadorRaiz);  //Si me piden la ruta raiz responder...

//Archivos estaticos ejp imagenes a enviar




// El server se queda escuchando ese puerto, a la espera de peticiones
servidor.listen(servidor.get('puerto'),manejadorServidor);

