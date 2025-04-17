// console.log('Hola desde JS!');

// Función de partición

function partition(arr, low, high){

    // Elegit el pivote
    let pivot = arr[high];

    // Indice del elemento más pequeño; indica la
    // posición correcta del pivote encontrada hasta ahora
    let i = low -1;

    // Recorrer desde arr[low] hasta arr[high - 1]
    // y mover todos los elementos más pequeños
    // a la izquierda. Los elementos desde low hasta
    // i son los menores en cada iteración

    for(let j = low; j <= high - 1; j++){
        if(arr[j] < pivot){
            i++;

            swap(arr, i, j);
        }
        
    }

    // Mover el pivote después de los elementos más pequeños y
    // devolver su posición final

    swap(arr, i + 1, high);
    return i + 1;

}

// Función para intercambiar dos elementos

function swap(arr, i, j){

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Implementación de la función QuickSort
function quickSort(arr, low, high){
    if(low < high){
        // pi es el índice del pivote devuelto por la partición
        let pi = partition(arr, low, high);

        // Llamadas recursivas para los elementos menores
        // y los mayores (o iguales) que el pivote
        quickSort(arr, low, pi - 1); // Menores que el pivote
        quickSort(arr, pi + 1, high);   // Mayores que el pivote

    }
}

let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;

// Llamar a QuickSort en todo el arreglo
quickSort(arr, 0, n - 1);


// Mostrar el arreglo ordenado
for(let i = 0; i < arr.length; i++){
    console.log(arr[i] + " ");    
}
