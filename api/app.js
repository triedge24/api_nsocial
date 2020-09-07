// librerias
const express = require('express');
const bodyParser = require('body-parser');

// inicio de APP
var app = express();

//cargar rutas

//cargar middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rutas


//exportar
module.exports = app;
