// console.log('Hola desde JS');

// Encontrar todas las combinaciones que existen en un conjunto de letras sin repetir

// 'abc'

// Clase del 10 de abril del 2025
function logPaso(camino, usado, accion){
    const contenedor = document.getElementById('pasos');
    const fila = document.createElement('div');
    fila.className = 'paso';

    const usadoTexto = usado.map((valor, i) => `${valor ? 'verdadero' : 'falso'}`).join('');

    fila.innerHTML = `
    <strong> CAMINO:</strong>   [${camino.join(', ')}]
    <strong> USADO:</strong>    ${usadoTexto}        
    <strong> ACCIÓN:</strong>   ${accion}
    `

    contenedor.appendChild(fila);

}
// Termina

const letra = 'ABC'

function permutaciones(cadena){
    const resultado = [];

    function backtrack(camino, usado){  // camino: ayuda a encontrar todas las combinaciones posibles
        // usado, cadena de booleanos para saber que valores ya fueron utilizadas
        // camino ['a', 'b', 'c']       

        if(camino.length === cadena.length){

            const combinacion = camino.join('')

            logPaso([...camino], [...usado], `COMBINACIÓN GUARDADA: '${combinacion}'`)

            resultado.push(combinacion);
            return;
        }

        for(let i = 0; i < cadena.length; i++){

            logPaso([...camino], [...usado], `Agrega '${cadena[i]}'`);

            if(usado[i]){ 
                  // Si usado en la posición i es true continua a la siguiente letra
                continue;
            };

            
            camino.push(cadena[i]); // Se agrega al arreglo vacio la letra que esta en cadena en la posición i
            usado[i] = true;    // Y se le agrega la propiedad de true, para que en la siguiente iteración
            // al querer evaluar A entre dentro del if y continue con la siguiente letra que es B.

            backtrack(camino, usado); // Se llama a la función backtrack con el nuevo camino y el nuevo usado

            const removido = camino.pop(); // Eliminar el último elemento del arreglo y retroceder

            usado[i] = false;

            logPaso([...camino], [...usado], `Quita la letra '${removido}'`);
            
        }      
        
        
    }
    
    backtrack([], Array(cadena.length).fill(false))

    
    // [] = CAMINO
    // Array(cadena.length).fill(false)) = USADO
    // Se crea un array nuevo y con la longitud de la cadena se llenara con fill la cantidad de false 
    // que tenga la cadena. "abc" => [false, false, false]

}

permutaciones('abc');



