const alumnos = [

    {
        nombre:"Juan",
        edad:21,
        genero:"M",

    },
    {
        nombre:"Jose",
        edad:19,
        genero:"M"
    },
    {
        nombre:"Camila",
        edad:20,
        genero:"F"
    },
    {
        nombre:"Raul",
        edad:18,
        genero:"M"
    },

];

/*
alumnos.unshift({
    nombre:"Pablo",
    edad:18,
    genero:"M"
})
*/
// Método unshift: Agrega un elemento al principio del array y desplaza los demás elementos hacia la derecha.

/*
alumnos.push({
    nombre:"Pablo",
    edad:18,
    genero:"M"
})
*/
// Método push: Agrega un elemento al final del array.

/*
const alumno = alumnos.find(alumno => alumno.nombre == "Camila");
*/
// Método find: Retorna el primer elemento que cumple con la condición dada en una función de prueba.

/*
const mauroExiste = alumnos.some(alumno => alumno.nombre == "Mauro");
*/
// Método some: Verifica si al menos un elemento cumple con la condición especificada en una función de prueba.

/*
const newArray = ["34", "2"]

console.log(alumnos.concat(newArray))
*/
// Método concat: Combina dos o más arrays creando un nuevo array.

/*
const nuevoArray = alumnos.forEach((alumno) => {

    if (alumno.genero == "M") {

        alumno.edad++

    }

    return alumno;

})
*/
// Método forEach: Itera sobre cada elemento de un array y ejecuta una función proporcionada.

/*
const ultimoAlumno = alumnos.pop();
*/
// Método pop: Elimina el último elemento de un array y lo retorna.

/*
const primero = alumnos.shift()
*/
// Método shift: Elimina el primer elemento de un array y lo retorna, ajustando el índice de los demás elementos.

/*
const primeros3 = alumnos.slice(0,3)
*/
// Método slice: Retorna una porción de un array, especificando el inicio y el final (no inclusivo) del fragmento.

/*
const borrados = alumnos.splice(1,1);
*/
// Método splice: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

/*
const alumno = alumnos.find( alumno => alumno.nombre == "Camila" );

alumno ? console.log(`${alumno.nombre} existe`) : console.log("no existe")
*/
// Utiliza el método find para buscar un elemento específico en un array y muestra un mensaje dependiendo de si se encontró o no.
