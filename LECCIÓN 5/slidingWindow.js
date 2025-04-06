// console.log('Hola desde JS');


function findLongestWord(text) {

    // Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');    

    let longestWord = ' '; // Inicializar la palabra más larga

    // Recorrer el arreglo de palabras con un ciclo

    for(let i = 0; i < words.length; i++){

        // Comparar la longitud de la palabra actual con longestWord
        if(words[i].length > longestWord.length){

            longestWord = words[i]; // Actualizar longestWord

        }
    }

    return longestWord; // Retornar la palabra más larga econtrada

}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender. Parangaricutirimicuaro";

// Llama a la función y muestra el resultado
console.log('La palabra más larga del texto es:', findLongestWord(text)); // Resultado esperado: "programación"