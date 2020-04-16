const { argv } = require('./config/yargs');
const { crearArchivo, listaTabla } = require('./mutiplicar/mutiplicar');
const colors = require('colors');

console.log(argv);
//console.log(process.argv);

let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listaTabla(argv.base, argv.limite)
            .then(datos => console.log(datos))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:' + ` ${archivo}`.green))
            .catch(e => console.log(e.red));
        break;
    default:
        console.log('comando no reconocido');
}

/*
console.log(argv._[0]);
console.log(argv.base);
console.log(argv.limite);
console.log(argv2);

let parametro = argv[2];

if (!parametro) {
    console.log('Error sin parametro');
} else {
    let baseArray = parametro.split('=');
}
*/