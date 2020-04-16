const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de mutiplicar', opciones)
    .command('crear', 'Crear la tabla de mutiplicar en un archivo', opciones)
    .help()
    .argv;

module.exports = {
    argv
}