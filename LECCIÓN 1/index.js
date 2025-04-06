//let carro = {
//    marca:'bmw',
//    serie: 'm3',
//    year:'2005',
//};
//let{year} = carro;

//console.log(year);//

// FUNCIÓN CON PROMESA
function pedirComida(plato){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(plato === 'pizza'){
                resolve(`Tu ${plato} esta listo!`)
            }
            else{
                reject(`Lo sentimos, no tenemos tu ${plato}`)
            }
        }, 3000)
    })
}

function pedirConPromesa(){
    console.log('Esperando el pedido (PROMESA)');
    pedirComida('hamburguesa')
    .then(respuesta => {
        console.log(respuesta)
        document.write(respuesta)
        alert(respuesta)
    })
    .catch(error => console.log(error))
}

async function pedirConAsync() {
    try{
        console.log('Esperando el pedido (Async/Await)');
        const resultado = await pedirComida('jamon')
        console.log(resultado);
        
    } catch(error){
        console.log(error);
    }

    
    
}

//pedirConPromesa();

//pedirConPromesa()

pedirConAsync();