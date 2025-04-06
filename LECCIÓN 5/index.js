// console.log('Hola mundo!');

const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]

const valor = 4 // En la función k es igual a valor

function subArray(arr, k){

    if(arr.length < k){ // Validar que el arreglo sea del tamaño
    //  adecuado para el valor (k), si es menor que el valor se
    //  retorna null (No se puede)
        return null
    }

    let maxSum = 0;

    // Iniciamos el bucle para recorrer el arreglo, basados
    // en la ventana (valor) que asignamos
    for(let index = 0; index < valor; index++){
        maxSum += arr[index];
        // console.log('iteración', index, maxSum);
    }

    let tempSum = maxSum;

    for(let i = k; i < arr.length; i++){
        tempSum = tempSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, tempSum); // = 39

    }

    return maxSum;

}

console.log(subArray(arr, valor));

