// console.log('Hola desde JS');

// 1. Lista de compras

let lista = [];

// 2. Agregar un producto al final del array, sin duplicados

function agregarProducto(producto){
    if(!lista.includes(producto)){
        lista.push(producto)
        console.log(`El producto ${producto} ha sido agregado correctamente a la lista`)
    }
    else{
        console.log(`El producto ${producto} ya se encuentra en la lista`)

    }
}

// 3. Eliminar un producto de la lista
function eliminarProducto(producto){
    lista = lista.filter(p => p !== producto);
    console.log(`El producto ${producto} ha sido eliminado correctamente de la lista`)
}
    

// 4. Imprimir la lista final 
const mostrarLista = () => {
    console.log(lista);
}

agregarProducto('café');

agregarProducto('Pan');

agregarProducto('Leche');

agregarProducto('Shampoo');

agregarProducto('Pan');

agregarProducto('café');

mostrarLista();

eliminarProducto('Pan');
mostrarLista();

agregarProducto('Shampoo');

agregarProducto('Pan');
mostrarLista();