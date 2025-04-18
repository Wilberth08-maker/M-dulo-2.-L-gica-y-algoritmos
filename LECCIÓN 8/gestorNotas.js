
const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

function agregarNota(titulo, contenido) {
    
    let notas = [];

    if (fs.existsSync(filePath)) {

        const data = fs.readFileSync(filePath, 'utf-8');
        notas = JSON.parse(data);

    }

    const existe = notas.some(nota => nota.titulo === titulo);
    if (existe) {
        console.log(`⚠️ Ya existe una nota con el titulo "${titulo}".`);
        return;
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('✔️ Nota agregada con éxito.');
}


// Lista todas las notas guardadas.
function listarNotas() {

    if (fs.existsSync(filePath)) {

        const data = fs.readFileSync(filePath, 'utf-8' );
        const notas = JSON.parse(data);

        console.log('Lista de notas:');
        notas.forEach((nota, i) => {
            console.log(`${i + 1}. ${nota.titulo} - ${nota.contenido}`);
        });

    } else {
        console.log('No hay notas guardadas.');
    }
}

// Eliminar nota por título
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {

    const data = fs.readFileSync(filePath, 'utf-8');
    let notas = JSON.parse(data);

    const notasRestantes = notas.filter((notas) => notas.titulo !== titulo);

    if (notas.length === notasRestantes.length){
        console.log(`No se encontro una nota con el título "${titulo}"`);
        return;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);

    } else {
    console.log('No hay notas para eliminar.');
    }
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');

agregarNota('Escuela', 'Hacer tarea de matemáticas.');
agregarNota('Proyecto', 'Hacer maqueta del sistema solar.');
agregarNota('Tareas', 'Lavar los trastes.');

agregarNota('Escuela', 'Hacer tarea de matemáticas.'); // Nota repetida

listarNotas();


