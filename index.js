// Importa o framework Express
const express = require('express');
// Importa módulos para manipular arquivos e caminhos
const fs = require('fs');
const path = require('path');

// Carrega variáveis de ambiente do arquivo variables.env
require('dotenv').config({path: 'variables.env'});

// Cria o roteador Express
const router = express();

// Rota principal: serve a página inicial
router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

// Rota do cardápio: serve o formulário de pedido
router.get('/cardapio', (req, res) => {
    fs.readFile(path.join(__dirname, 'template', 'cardapio.html'), 'utf8', (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.send(data);
        }
    });
});

// Rota do pedido: exibe o resumo do pedido feito pelo usuário
router.get('/pedido', (req, res) => {
    // Obtém os parâmetros da URL
    const sabores = req.query.sabores || '';
    const tamanho = req.query.tamanho || 'Pequena';
    const adicionais = req.query.adicionais || 'Nenhum';
    const total = req.query.total || '0,00';

    // Monta a lista HTML dos sabores escolhidos
    let listaSaboresHTML = '';
    if (sabores.trim() === '') {
        listaSaboresHTML = '<li>Nenhum sabor selecionado</li>';
    } else {
        const arraySabores = sabores.split(',');
        listaSaboresHTML = arraySabores.map(sabor => `<li>${sabor}</li>`).join('');
    }

    // Monta a lista HTML dos adicionais escolhidos
    let listaAdicionaisHTML = '';
    if (adicionais === 'Nenhum') {
        listaAdicionaisHTML = '<li>Nenhum</li>';
    } else {
        const arrayAdicionais = adicionais.split(',');
        listaAdicionaisHTML = arrayAdicionais.map(adicional => `<li>${adicional}</li>`).join('');
    }

    // Lê o template do resumo do pedido e insere os dados
    fs.readFile(path.join(__dirname, 'template', 'pedido.html'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            data = data.replace('{sabores}', listaSaboresHTML);
            data = data.replace('{tamanho}', tamanho);
            data = data.replace('{adicionais}', listaAdicionaisHTML);
            data = data.replace('{total}', total.replace('.', ','));
            res.send(data);
        }
    });
});

// Exporta o roteador para ser usado na aplicação principal
module.exports = router;
