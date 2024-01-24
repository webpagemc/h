//TIPOS DE DATOS ------

//strings ---> "This is a String"
//bool ------> true / false
//number ----> 34, 56.998
//arrays ----> [ "mauro", "jose" ] 
//objetos ---> { title:"Celular", price:500000, "Enterprise":"Samsung", Vender: function(){  } };

//FUNCIONES -----------

//funciones tradicionales
function sumar(n1, n2){

    let res = n1 + n2;
    return res; //El return devuelve un dato y cierra la ejecuion de la funcion

};

//funciones flecha
const restar = (n1, n2) => {

    const res = n1 - n2;
    return res;

};

//CONDICIONALES -------

/*
const age = prompt("Introduci un numero");
const heigth =  prompt("Intoruci tu altura");


if( age > 18 && heigth > 150 ){

    console.log("Podes pasar");

}else if(age > 18 || heigth > 150 ){

    console.log("Podes pasar a la otra");

}else{
    console.log("No podes pasar");
}
*/

//OPERADOR TERNARIO

const funcion = (a, b) => {

    const res = a + b;

    if(res > 10){
        console.log("mensaje es mayor")
    }else{
        console.log("mensaje es menor")
    }

}

funcion(89,1)




