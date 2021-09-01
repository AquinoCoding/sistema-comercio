// Importação de Modulos Iniciais
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const logger = require('morgan');


// Chamada de Rotas
const rotaLogin = require('./routes/login');
const rotaMenu = require('./routes/menu');
const rotaCadastro = require('./routes/cadastro');
const rotaController = require('./routes/controller');
const rotaIndex = require('./routes/index');
const rotaCadEmpre = require('./routes/cadempre');
const rotaCadCliente = require('./routes/cadcliente');
const rotaCadProduto = require('./routes/cadproduto');
const rotaFazerPedido = require('./routes/fazerpedido');
const rotaProdutos = require('./routes/produtos');

// Constante de uso EXPRESS
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

// Leitura de Json com express 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Definição de Endereços de ROTAS
app.use('/login', rotaLogin);
app.use('/auth', rotaCadastro);
app.use('/menu', rotaMenu);
app.use('/controllers', rotaController);
app.use('/', rotaIndex);
app.use('/cadastro-empresa', rotaCadEmpre);
app.use('/cadastro-cliente', rotaCadCliente);
app.use('/cadastro-produto', rotaCadProduto);
app.use('/fazer-pedido', rotaFazerPedido);
app.use('/produtos', rotaProdutos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


module.exports = app;
