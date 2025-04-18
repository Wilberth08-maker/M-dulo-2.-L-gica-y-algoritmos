// console.log('Hola desde JS!');

// PROMESAS Y ASYNC/AWAIT

const fetchUserData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve({ id: 1, name: "Alice" });  // Objeto que simula datos de usuario
        }, 2000);
    });
};
    
    const getUser = async () => {
    
      const userData = await fetchUserData();  // Espera a que se resuelva la promesa
    
      console.log(userData);  // Muestra el resultado en consola
};

getUser();

// Clases

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerDetalles() {
        return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
    }

    actualizarStock(cantidad) {
        this.cantidad += cantidad;
    }
}

const producto1 = new Producto('Camiseta', 25, 100);
producto1.actualizarStock(-20);
console.log(producto1.obtenerDetalles());  // Camiseta - Precio: 25 - Stock: 80

// Módulos
// app.js
import { login } from './auth.js';
import { obtenerDatos } from './auth.js';

if (login('admin', '1234')) {
    console.log('Login exitoso');
    console.log(obtenerDatos());
} else {
    console.log('Login fallido');
}




