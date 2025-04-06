// console.log('Hola desde JS');

// 1. Arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
    { nombre: "Lápiz", precio: 100, categoria: "Papelería" },
    { nombre: "Impresora", precio: 700, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 500, categoria: "Electrónica" },
];

// 2. Filtrar los productos que cuesten menos de $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log('Los productos que tienen un costo menor a $100 son:' , productosBaratos);

// 3. Ordenar Alfabeticamente por su nombre

productos.sort((a, b) => a.nombre.localeCompare(b.nombre)); // Ordene afabeticamente el arreglo productos ya que productosBaratos ya estaba ordenado
// a y b son dos valores del array que se comparan entre sí, si:<
// a va antes que b => devuelve -1
// b va después que ba => devuelve 1
// a son iguales b => devuelve 0

console.log('Nombres ordenados alfabéticamente: ', productos);

// 4. Imprimir solo el nombres de los productos

const nombresProductos = productos.map(producto => producto.nombre)

console.log('Nombres de los productos: ', nombresProductos);

// 5. Sumar el costo total de los productos

const costoTotal = productos.reduce((precio, producto) => precio + producto.precio, 0);

console.log(`El costo total de los productos será de $${costoTotal}`);

// 6. Productos de la categoría eletrónica

const electrónica = productos.filter(producto => producto.categoria === 'Electrónica');

console.log('Los productos de categoría Electrónica son: ', electrónica);

// 7. Verificar si al menos hay un producto de papelería

if(productos.some(producto => producto.categoria === 'Papelería')){
    console.log('Hay al menos un producto de papeleria');    
}
else{
    console.log('No se encontró ningun producto de papelería');
    
}







