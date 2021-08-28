// Importação de Modulos Iniciais
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// Config de Porta e HostDocker
const PORT = 3000;
const HOST = '0.0.0.0';

// Chamada de Rotas
var rotaLogin = require('./routes/login');


// Constante de uso EXPRESS
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// Leitura de Json com express 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Definição de Endereços de ROTAS
app.use('/login', rotaLogin);




app.listen(PORT,HOST, () =>
    console.log('Serve in run time in 3000')
);

module.exports = app;
