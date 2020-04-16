Probando a hacer web con nodejs

Descripcion de pasos que estamos haciendo
En terminal, carpeta del proyecto/npm init --yes
    Inicializa un proyecto de nodejs, crea archivo de config, package.json
Instalamos paquetes de nodejs que necesitamos
    npm install express  //server sencillo
    npm install ejs     //motor de plantillas, ayuda para escribir HTML en el server con programacion
    npm install morgan  //poder ver por consola lo que los users nos estan pidiendo

     npm install nodemon --save-dev //Sisve para utilizar en vez de "node" Lo que hace es que cada vez que cambiemos algo y guardemos, cierra la app y la vuelve a abrir el solo
                //El '-dev' dice que es un modulo que usamos para desarrollar mas rapido pero que no es necesario para que funcione el programacion



creamos archivo .gitignore donde ponemos todo lo que no queremos que se suba a gitignore
    Yo por ejemplo, la carpeta node_modules




En terminal node "nombre de archivo.js"  para ver que todo funciona

Recomendable: en package.jason ->>  scripts ->> añadimos una nueva funcion -->ejp "arrancar": "node src"
    y para arrancar "npm run arrancar"
    buena practica, ya que se pueden necesitar llamar a muchas cosas a la vez, y a si se simplificará en un futuro
    ademas hay uno especial "start": "node src" que se arranca con "npm start", este suele ser arrancado por defecto por los servidores


el arrancar de 'package.jason' lo vamos a cambiar por "arrancar": "nodemon src" asi estaremos usando esa funcion



//Incapaz de unir con github despues de crear tube que crear todo el proyecto como un clon de un repositorio para que me funcionara