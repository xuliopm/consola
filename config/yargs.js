const argv = require('yargs')
    .options({
        'base': {
            alias: 'b',
            describe: 'Base de la tabla de multiplicar',
            demandOption: true,
            type: 'number'
        },
        'listar': {
            alias: 'l',
            describe: 'Imprime la tabla de multiplicar',
            demandOption: false,
            default: false,
            type: 'boolean'
        },
        'hasta': {
            alias: 'h',
            describe: 'Límite da la tabla de multiplicar',
            demandOption: false,
            type: 'number',
            default: 10
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base ha de ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;