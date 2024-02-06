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
    }

});

const userModel = mongoose.model("users",userSchema );

userModel.create({
    username:"Mauro",
    email:"mauro@mail.com"
})

{
    username:"Mauro",
    email:
}

