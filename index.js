const express = require('express');
const fs = require('fs');
const path = require('path');

require('dotenv').config({path: 'variables.env'});

const router = express();

router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

// Rota do cardápio que entrega o formulário
router.get('/cardapio', (req, res) => {
    fs.readFile(path.join(__dirname, 'template', 'cardapio.html'), 'utf8', (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.send(data);
        }
    });
});

// Rota do pedido
router.get('/pedido', (req, res) => {
    const sabores = req.query.sabores || '';
    const total = req.query.total || '0,00';

    let listaSaboresHTML = '';
    if(sabores.trim() === '') {
        listaSaboresHTML = '<li>Nenhum sabor selecionado</li>';
    } else {
        const arraySabores = sabores.split(',');
        listaSaboresHTML = arraySabores.map(sabor => `<li>${sabor}</li>`).join('');
    }
    
    fs.readFile(path.join(__dirname, 'template', 'pedido.html'), 'utf8', (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            // Substituir os placeholders
            data = data.replace('{sabores}', listaSaboresHTML);
            // Trocar ponto por vírgula no total para formato BR
            data = data.replace('{total}', total);
            res.send(data);
        }
    });
});

module.exports = router;
