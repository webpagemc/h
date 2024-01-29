let empresa = {

    nombre:"Software SBD",
    empleados: [
        {
            nombre:"Hernan Hamra",
            edad:50,
            nacionalidad:"Argentina"
        },
        {
            nombre:"Katia Hamra",
            edad:20,
            nacionalidad:"Argentina"
        }
    ],
    webpage: "https://sofwtarebydesign.com.ar",
    capital: 600000,
    sede:"Buenos Aires",
    enVenta:true,
    venderse: () => {

        empresa.enVenta = false

    }

};

const {nombre, sede, capital} = empresa


console.log(nombre, sede, capital)