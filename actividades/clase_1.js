

//Crear un programa que tome la calificación de un estudiante como entrada. 
//La calificación es un número entero entre 0 y 100. 
//Implementar una función llamada rateStudent que tome la calificación como argumento 
//y muestre un mensaje indicando si el estudiante ha aprobado o no. 
//Un estudiante aprueba si su calificación es igual o mayor a 60. 
//Además, si la calificación es perfecta (100), imprimir un mensaje adicional 
//felicitando al estudiante por obtener la calificación máxima.

/**
 * Recorda tener en cuenta el orden de los condicionales
 * No inclui objetos porque prefiero verlo mas en profundidad la proxima vez
 * Podes usar tanto funciones flecha como funciones tradicionales
 * Recorda que dentro de cada condicion podes tener un return distinto (el return corta la ejecucion de la funcion y devuelve un dato)
 */

const calificacionExamen = prompt("Ingrese la calificación"); 
//tenes la variable calificacionExamen que toma el valor del prompt

const rateStudent = (calificacion) => {

    if (calificacion >= 60 && calificacion<=99) {
        console.log("El estudiante aprobó la materia")
    } else if (calificacion ==100) {
        console.log("Felicitaciones!!! Usted obtuvo la calificación máxima.")
    } else {
        console.log("El estudiante reprobó la materia")
    }

    return;
}

rateStudent(calificacionExamen); 
//le pasas como parametro a la funcion

