// ejercicio práctico

// auth.js
export function login(usuario, contrasena) {
    return usuario === 'admin' && contrasena === '1234';
}

// db.js
export function obtenerDatos() {
    return ['Producto 1', 'Producto 2', 'Producto 3'];
}
