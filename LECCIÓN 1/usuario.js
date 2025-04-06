
// app.js

import { registrarDestino, mostrarItinerario } from "./viajes.js";

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2025-06-15", "Avión");
    registrarDestino("Londres", "2025-07-01", "Tren"); 
    registrarDestino("Zermatt", "2025-08-08", "Avión");
    registrarDestino("Mérida", "2025-09-14", "Camión");


    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
