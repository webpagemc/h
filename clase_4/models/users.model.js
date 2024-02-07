const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    apellido:{
        type:String,
        required:true,
        unique:true
    },
    altura:{
        type:Number,
        required:true,
        unique:true
    },
    peso:{
        type:Number,
        required:true,
        unique:true
    },
    ciudad:{
        type:String,
        required:true,
        unique:true
    },
    zona_horario:{
        type:String,
        required:true,
        unique:true
    },
    test_fuerza:{// aca serian varios valores de fuerza de cada grupo muscular...
        type:Number,
        required:true,
        unique:true
    }


});

const userModel = mongoose.model("users",userSchema );

userModel.create({
    username:"hernan",
    email: "mauro@mail.com",
    nombre: "Hernán",
    apellido: "Hamra",
    altura: 1.78,
    peso: 89,
    ciudad: "Buenos Aires", //aca deberia haber ciudad por defalutl con la banda horaria
    zona_horario:"ut8", //aca deberia haber  por defalutl la banda horaria segun ciudad

})

const entrenamiento = new mongoose.Schema({
    nombre:{ // habroia por default que elegir entre fuerza, resistencia, hipertrofia, trasnferencia deportiva.
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    nivel:{//habria que elegir por default tres niveles- iniciado, intermedio, avanzado y pro
        type:String,
        required:true
    },
    intensidad:{
        type:Number,
        required:true
    },


})

