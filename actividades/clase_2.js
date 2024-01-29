/*

Crea una clase llamada Alumno en JavaScript que represente a un estudiante. 
La clase debe tener las siguientes características:

Propiedades:

nombre: Una propiedad que almacena el nombre del alumno.
materiasAprobadas: Un objeto que almacenará las materias del alumno y su estado de aprobación. 
Debe inicializarse en el constructor.
Métodos:

aprobarLengua():
aprobarMatematica():
aprobarHistoria():

Un método que aprueba la materia en cuestio
Debe cambiar el valor la propiedad materia a true (en caso de ser false)
Constructor:

El constructor debe aceptar el nombre del alumno y valores booleanos para cada materia 
(matematica, lengua, historia). 
Estos valores iniciales determinarán si las materias están aprobadas o no al momento de crear un objeto Alumno.

El alumno a crear debe verse de la siguiente manera:

{
    nombre:"Maxi",
    materiasAprobadas:{

        lengua:true,
        matematica:false
        historia:false

    },
    aprobarHistoria: ()=>{...},
    aprobarHistoria: ()=>{...},
    aprobarHistoria: ()=>{...}
}

*/

//EJEMPLO DE USO

// Crear un alumno llamado Juan con matemática y geografía aprobadas
const alumno1 = new Alumno("Juan", true, false, true, false);

// Imprimir el estado inicial de las materias
console.log(`${alumno1.nombre} tiene las siguientes materias aprobadas:`, alumno1.materiasAprobadas);
// Salida esperada: Juan tiene las siguientes materias aprobadas: { matematica: true, lengua: false, geografia: true, historia: false }

// Aprobar Lengua y Historia
alumno1.aprobarLengua("lengua");
alumno1.aprobarHistoria("historia");

// Imprimir el estado actualizado de las materias
console.log(`${alumno1.nombre} tiene las siguientes materias aprobadas ahora:`, alumno1.materiasAprobadas);
