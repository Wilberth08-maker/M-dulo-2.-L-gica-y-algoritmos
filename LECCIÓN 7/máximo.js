// console.log('Hola desde JS!');

function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // TODO: Combinar las soluciones comparando los máximos
    return leftMax > rightMax ? leftMax : rightMax;
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];

console.log(numbers);

console.log('El número máximo del arreglo es: ', findMax(numbers)); // Salida esperada: 10
