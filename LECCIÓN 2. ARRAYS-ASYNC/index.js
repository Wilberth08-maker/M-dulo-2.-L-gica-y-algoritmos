
// FUNCIÓN CON PROMESAS
function obtenerPokemonConPromesa(nombre){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}
`)

.then((response) => {

    if(!response.ok){ // Aquí se revisa si la información es diferente de 200, si lo es se marca error
        throw Error('Error en la respuesta del pokemon: ',
        response.status)
    }

    // Si no es diferente que 200 se retorna con un .json para que pase al siguiente .then
    return response.json() // Convierte la información en data de JS
})

// Maneja los datos del primer .then después de validar la informacíón

.then((data) => {    // Información VERDADERA

    //console.log('Datos del pokemon', data);    

})

.catch((error) => {  // Información FALSA
    //console.log('Error en la respuesta', error);
})

}

const btnPromesa = document.getElementById('btn-promesa')

btnPromesa.addEventListener('click', () => {
    obtenerPokemonConPromesa('pikachu')
})

// FUNCIÓN PARA CREAR CARTA
function crearCarta(name, peso, id, img){
    let article = document.createElement('article');
    article.innerHTML = `
    <img class="image" src= ${img} alt = "PokemonImage"/>
    <h2> ${name}</h2>
    <p> Peso: ${peso} </p>
    <p>id: ${id} </p>
    `
    article.classList.add('carta');

    document.getElementById('render').appendChild(article);
}

//  FUNCIÓN CON ASYNC Y AWAIT
async function obtenerPokemonAsync(){
    try{

        // El AWAIT sirve para que no se ejecuté el siguiente código antes de que se resuelva esta parte.
        // Espera a que llegue la información, luego la valida y la guarda en response. 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)

        if(!response.ok){
            throw Error('Error en la respuesta del pokemon: ',
            response.status)
        }

        const data = await response.json();
        //console.log('Datos del pokemon ASYNC', data.results);

        // Trae el listado de los Pokemons
        for(let index = 0; index < data.results.length; index++){

            // Trae la información de cada pokemon            
            const detalleResponse = await fetch(data.results[index].url);

            if(!detalleResponse.ok){
                throw Error('Error en la respuesta del detalle del pokemon: ',
                detalleResponse.status)
            }

            const dataDetalle = await detalleResponse.json();

            //console.log(dataDetalle);

            crearCarta(dataDetalle.name, dataDetalle.weight, dataDetalle.id, dataDetalle.sprites.front_default);

        }

    } catch(error){
        console.log('Error en la respuesta ASYNC', error);
    }
}

const btnAsync = document.getElementById('btn-async')

btnAsync.addEventListener('click', () => {
    obtenerPokemonAsync();
})

