// console.log('Hola desde JS');

// 1. ¿Todas las personas completaron sus tareas?
// 2. ¿Alguna persona NO completo sus tareas?
// 3. ¿Cuantas tareas en total se completaron entre todos?
// 4. Hay alguna tarea especifica incluida en las tareas
// de alguien.

const personas = [
    {
        nombre: 'Ana',
        tareas: ['limpiar', 'cocinar', 'lavar'],
        completadas: ['limpiar', 'lavar']
    },
    {
        nombre: 'Wilberth',
        tareas: ['limpiar', 'cocinar'],
        completadas: ['limpiar', 'cocinar']
    },
    {
        nombre: 'Luis',
        tareas: ['limpiar', 'cocinar'],
        completadas: ['limpiar']
    },
]

// 1. ¿Todas las personas completaron sus tareas?

const todosCumplieron = personas.every(persona => persona.
tareas.every(tarea => persona.completadas.includes(tarea)))

console.log('¿Todos cumplieron con sus tareas?: ', todosCumplieron);

// 2. ¿Alguna persona NO completo sus tareas?

const algunoCumplio = personas.some(persona => persona.
tareas.some(tarea => !persona.completadas.includes(tarea))) // El ! lo convierte en NO

console.log('¿Alguna persona NO cumplió con sus tareas?: ', algunoCumplio);

// 3. ¿Cuantas tareas en total se completaron entre todos?

const totalTareasCompletadas = personas.reduce((total, persona) => { // total es el acumulador; persona es el valor actual(en el primer caso es 2)
    return total + persona.completadas.length;
}, 0)

console.log('Total de tareas completadas: ', totalTareasCompletadas);

// 4. Hay alguna tarea especifica incluida en las tareas
// de alguien.

const alguienTeniaQueLavar = personas.some((persona) => persona.tareas.
includes('lavar'))

console.log('¿Alguien tenía que lavar?: ', alguienTeniaQueLavar);








