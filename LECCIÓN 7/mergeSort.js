// console.log('Hola desde JS');

// Ordenar un arreglo
function merge(left, right){

    let arrOrdenado = [];   // Aquí se iran agregando los elementos ordenados

    while(left.length && right.length){

        // Insertar el elemento más pequeño en arrOrdenado
        if(left[0] < right[0]){

            arrOrdenado.push(left.shift())

        }
        else{
            arrOrdenado.push(right.shift())
        }
    }

    // Usar el spread operator para crear un nuevo arreglo, combinando los tres arreglos
    return [...arrOrdenado, ...left, ...right]

}

function mergeSort(arr){
    // Cado base
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2)

    // Llamadas recursivas
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right); // Se ordena
    
}

const arreglo = [3, 5, 8, 5, 99, 1];

mergeSort(arreglo);

console.log(arreglo);

console.log('Arreglo ordenado: ', mergeSort(arreglo));

