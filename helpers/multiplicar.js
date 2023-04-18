const fs = require('node:fs');
const colors = require('colors');

const crearArchivo = async (base, hasta, listar) => {
    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        if (listar) {
        console.log('======================='.red);
        console.log(`===== Tabla del ${base} =====`.green);
        console.log('======================='.red);
        console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    } catch (error) {
        throw(error);
    }
}

module.exports = {
    crearArchivo
}