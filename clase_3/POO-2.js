// Definición de la clase base 'Personaje'
class Personaje {
    // Constructor para inicializar las propiedades comunes
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

    // Método para presentar al personaje
    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.tipo}.`);
    }
}

// Clase que extiende de 'Personaje' para representar a los héroes
class Heroe extends Personaje {
    // Constructor específico para héroes
    constructor(nombre, edad, poder) {
        // Llamamos al constructor de la clase base usando 'super'
        super(nombre, edad, "héroe");
        this.poder = poder;
    }

    // Método específico para héroes: usar su poder
    usarPoder() {
        console.log(`${this.nombre} está usando su poder: ${this.poder}!`);
    }
}

class Villano extends Personaje {

    constructor(nombre, edad, plan) {

        super(nombre, edad, "villano");
        this.plan = plan;
    }

    ejecutarPlan() {
        console.log(`${this.nombre} está ejecutando su malévolo plan: ${this.plan}.`);
    }
}

// Creación de instancias de las clases
const superman = new Heroe("Superman", 30, "vuelo");
const joker = new Villano("Joker", 35, "caos");

superman.presentarse();
superman.usarPoder();

joker.presentarse();
joker.ejecutarPlan();
