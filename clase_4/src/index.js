const express = require("express");
const parsers = require("./utils/parsers.js");

parsers.contar(["hola", "chau"]);

const app = express();

app.listen(8080, ()=>{ console.log("Servidor Levantado!") } )
