const fs = require('fs');

fs.writeFileSync('archivo.txt', 'Hola desde Node.js!');

fs.appendFileSync('archivo.txt', '\n\nEsta es una nueva linea')

const contenido = fs.readFileSync('archivo.txt', 'utf-8');

console.log(contenido);

fs.mkdirSync('carpetaNode')

fs.writeFileSync('carpetaNode/archivo.txt', 'Hola desde Node.js!')

// fs.unlinkSync('archivo.txt');