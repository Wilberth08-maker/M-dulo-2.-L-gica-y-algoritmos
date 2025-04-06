// console.log('Hola desde JS');


const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {

        // Con map():
        const iniciales = invitados.map(inciales => inciales[0]);

        if(iniciales[inicio] === iniciales[siguiente]){

            return [invitados[inicio], invitados[siguiente]];        
        }

        // Avanzar punteros si no coinciden
        inicio ++;
        siguiente++;
        
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ['Carlos', 'Cecilia']