// Dos punteros con strings

function esPalindromo(palabra){

    palabra = eliminarEspacios(palabra);

    let izquierda = 0;
    let derecha = palabra.length - 1;

    while(izquierda < derecha){
        if(palabra[izquierda] !== palabra[derecha]){
            console.log(`La palabra ${palabra} no es palindromo`);
            return false;
        }
        izquierda++
        derecha--
    }

    console.log(`La palabra ${palabra} es palindromo`);
    return true;

}

esPalindromo('anita lava la tina');

// EJERCICIO. Hacer que la función evalue tambien frases!

function eliminarEspacios(palabra){
    let palabraSinEspacios = "";

    for(let i =  0; i < palabra.length; i++){
        if(palabra[i] !== ' '){
            palabraSinEspacios += palabra[i].toLowerCase();
        }
    }
    return palabraSinEspacios;
}