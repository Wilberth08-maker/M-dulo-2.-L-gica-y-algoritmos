// console.log('Hola desde JS');

// Ejemplo 2. Punteros

function encontrarParDeNúmeros(arreglo, target){
    
    // Definir punteros
    let izquierda = 0;  // Posición inicial del array
    let derecha = arreglo.length - 1;   // Posición final del array   

    while(izquierda < derecha){

        let suma = arreglo[izquierda] + arreglo[derecha];

        if(suma === target){
            console.log(`Encontrado: ${arreglo[izquierda]} + ${arreglo[derecha]} = ${target}`);
                return true;
        }
    
        if(suma < target){
            izquierda++;
        }
        else{
            derecha--;
        }
    }

    alert('No se encontro el target')
    return false; // No se encontro el resultado esperado, no se encontro el target

}

let arregloParaSumar = [1, 2, 3, 4, 5, 6, 7, 8, 9]

encontrarParDeNúmeros(arregloParaSumar, 10);
