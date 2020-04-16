const fs = require('fs');

let listaTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es un numero');
            return;
        }

        if (!Number(limite)) {
            reject('El limite no es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }
        resolve(data);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es un numero');
            return;
        }

        if (!Number(limite)) {
            reject('El limite no es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tablas/tabla-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo: crearArchivo,
    listaTabla
}