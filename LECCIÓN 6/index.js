// console.log("Hola Mundo");

// PRINCIPIO DE LA RECURSIVIDAD
// Llamar a una función dentro de si misma
// para resolver un problema

// function contar(número){

//     if(número > 5){
//         return;
//     }

//     console.log(número);

//     contar(número + 1);

// }

// contar(1);


// EJEMPLO 2. FACTORIAL DE UN NÚMERO POR MEDIO DE RECURSIVIDAD

function factorial(número){
    
    if(número === 1){
        return 1;
    }

    return número * factorial(número - 1 )    
    
}

console.log('El factorial de 3 es: ', factorial(3));

// Factorial(5) = 5 * 24 = 120  Entra al stack o a la pila
// Factorial(4) = 4 * 6 = 24
// Factorial(3) = 3 * 2 = 6
// Factorial(2) = 2 * 1 = 2
// Factorial(1) = 1

// Todo va entrando al stack y se van guardando o se ponen en espera
// hasta que se puedan resolver, en este caso hasta que llega a 1

// STACK:
// Factorial(1) = resuelve y se sale
// Factorial(2) = 2 * 1 = 2 resuelve y se sale
// Factorial(3) = 3 * 2 = 6 resuelve y se sale
// Factorial(4) = 4 * 6 = 24 resuelve y se sale
// Factorial(5) = 5 * 24 = 120 resuelve y se sale de la pila


// LIFO Last in, First Out

