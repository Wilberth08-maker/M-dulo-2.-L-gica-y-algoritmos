// console.log('Hola desde JS');

function suma(arr){

    // Caso base: Si el arreglo tiene solo un elemento
    if(arr.length === 1){
        return arr[0];        
    }

    // Dividir el arreglo en 2
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Conquistar: Sumar cada parte con recursividad
    const leftSuma = suma(left);
    const rightSuma = suma(right);

    // Combinar: Sumar los resultados
    return leftSuma + rightSuma;  

}

// Ejemplo de uso

const numbers = [1, 2, 3, 4, 5];

console.log(`La suma de los elementos del array es igual a: ${suma(numbers)}`); // Salida: 15
