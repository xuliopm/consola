const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');
 
console.clear();
const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

crearArchivo(base, hasta, listar)
    .then(archivo => console.log(`El archivo ${archivo} ha sido creado`.blue))
    .catch(err => console.log(err));