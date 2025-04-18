
const fs = require('fs');

const readline = require('readline');

// Crear la interfaz para leer desde consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ruta del archivo de notas
const filePath = './appNotas.json';

function agregarNota(titulo, contenido) {
    
    let notas = [];

    if (fs.existsSync(filePath)) {

        const data = fs.readFileSync(filePath, 'utf-8');
        notas = JSON.parse(data);

    }

    const existe = notas.some(nota => nota.titulo === titulo);
    if (existe) {
        console.log(`⚠️ Ya existe una nota con el titulo "${titulo}".`);
        rl.close();
        return;
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);

    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('✔️ Nota agregada con éxito.');
    rl.close();
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

        rl.close();

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
        rl.close();
        return;
    }
    
    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`Nota con título "${titulo}" eliminada.`);
    rl.close();
    } else {
        console.log('No hay notas para eliminar.');
    }
}

// Menú principal
function mostrarMenu() {
    console.log('\n--- MENÚ DE NOTAS ---');
    console.log('1. Agregar nota');
    console.log('2. Listar notas');
    console.log('3. Eliminar nota');
    console.log('4. Salir\n');

    rl.question('Elige una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
            rl.question('📌 Ingresa el título: ', (titulo) => {
            rl.question('📝 Ingresa el contenido: ', (contenido) => {
                agregarNota(titulo, contenido);
            });
        });
        break;

            case '2':
            listarNotas();
            break;

            case '3':
            rl.question('🗑️ Ingresa el título de la nota que quieres eliminar: ', (titulo) => {
                eliminarNota(titulo);
            });
            break;

            case '4':
            console.log('👋 Hasta luego.');
            rl.close();
            break;

            default:
            console.log('❌ Opción no válida.');
            rl.close();
            break;
        }
    });
}

mostrarMenu();


