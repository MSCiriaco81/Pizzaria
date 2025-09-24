// Importa a aplicação Express configurada em app.js
const app = require('./app');

// Carrega as variáveis de ambiente do arquivo variables.env
require('dotenv').config({path: 'variables.env'});

// Define a porta do servidor (usa a variável de ambiente PORT ou 7777 por padrão)
app.set('port', process.env.PORT || 7777);   
// Inicia o servidor e exibe mensagem no console
const server = app.listen(app.get('port'),() => {
    console.log("[OK] - Servidor em PORT: " + server.address().port);
}); 