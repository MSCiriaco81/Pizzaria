// Importa o framework Express para criar o servidor web
const express = require('express');
// Importa o roteador definido em index.js
const router = require('./index');

// Cria a aplicação Express
const app = express();
// Usa o roteador para todas as rotas a partir da raiz
app.use('/', router);

// Exporta a aplicação para ser utilizada pelo server.js
module.exports = app;