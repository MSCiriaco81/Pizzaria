

# Pizzaria

## Sumário
1. [Introdução](#pizzaria)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Como funciona](#como-funciona)
4. [Explicação dos arquivos principais](#explicação-dos-arquivos-principais)
5. [Como rodar o projeto](#como-rodar-o-projeto)
6. [Exemplos de Código e Explicação](#exemplos-de-código-e-explicação)
7. [Resumo de Conteúdo para Prova](./conteudo.md)

Projeto simples de pizzaria desenvolvido para fins didáticos utilizando **Node.js** e **Express**. O sistema permite visualizar o cardápio, montar pedidos e exibir um resumo do pedido.

> **Este projeto possui uma versão evoluída utilizando Spring Boot:**
> 
> [PizzariaWithSpring (Spring Boot)](https://github.com/MSCiriaco81/PizzariaWithSpring)

## Estrutura do Projeto

- `index.html` — Página inicial com botão para acessar o cardápio.
- `template/cardapio.html` — Formulário para seleção de sabores, tamanhos e adicionais da pizza. Calcula o preço total (HTML puro).
- `template/pedido.html` — Exibe o resumo do pedido realizado, mostrando sabores, tamanho, adicionais e total (HTML puro).
- `index.js` — Define as rotas principais da aplicação (página inicial, cardápio e pedido), faz leitura dos templates e monta o resumo do pedido.
- `app.js` — Configura a aplicação Express e importa as rotas.
- `server.js` — Inicializa o servidor, define a porta e carrega variáveis de ambiente.
- `variables.env` — Arquivo de variáveis de ambiente (porta, etc).

## Como funciona

1. O usuário acessa a página inicial (`/`), que possui um botão para ir ao cardápio.
2. No cardápio (`/cardapio`), o usuário seleciona sabores, tamanho e adicionais, e o valor total é calculado no front-end.
3. Ao enviar o pedido, o usuário é redirecionado para `/pedido`, onde um resumo do pedido é exibido.

## Explicação dos arquivos principais

- **index.html**: Página inicial simples com botão para acessar o cardápio.
- **template/cardapio.html**: Formulário HTML puro para montar o pedido. O JavaScript calcula o valor total e monta a query string para o resumo.
- **template/pedido.html**: Template HTML puro que recebe os dados do pedido via placeholders (`{sabores}`, `{tamanho}`, `{adicionais}`, `{total}`) e exibe o resumo.
- **index.js**: Define as rotas do Express. Lê os arquivos HTML, processa os parâmetros do pedido e monta as listas de sabores/adicionais para o resumo.
- **app.js**: Cria a aplicação Express e aplica as rotas.
- **server.js**: Inicia o servidor na porta definida e carrega variáveis de ambiente.

## Como rodar o projeto

1. Instale as dependências com `npm install`.
2. Execute o servidor com `npm start` ou `node server.js`.
3. Acesse `http://localhost:7777` (ou a porta definida em `variables.env`).

---

---

## Exemplos de Código e Explicação

### 1. Definindo Rotas (index.js)
```js
const express = require('express');
const router = express.Router();

// Página inicial
router.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// Cardápio
router.get('/cardapio', (req, res) => {
	res.sendFile(__dirname + '/template/cardapio.html');
});

// Pedido (resumo)
router.get('/pedido', (req, res) => {
	// Aqui você processaria os parâmetros do pedido e renderizaria o template
	res.sendFile(__dirname + '/template/pedido.html');
});

module.exports = router;
```
**Explicação:**
Essas rotas definem o que acontece quando o usuário acessa cada URL. O Express envia o arquivo HTML correspondente para o navegador.

### 2. Configurando o Express (app.js)
```js
const express = require('express');
const app = express();
const routes = require('./index');

app.use(express.static(__dirname)); // Servir arquivos estáticos
app.use('/', routes); // Usar as rotas definidas

module.exports = app;
```
**Explicação:**
Aqui criamos a aplicação Express, configuramos para servir arquivos estáticos (HTML, CSS, JS) e aplicamos as rotas criadas no arquivo index.js.

### 3. Inicializando o Servidor (server.js)
```js
require('dotenv').config({ path: './variables.env' });
const app = require('./app');

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```
**Explicação:**
Esse código carrega as variáveis de ambiente, importa a aplicação Express e inicia o servidor na porta definida.

### 4. Leitura de Template e Montagem de Resumo (index.js)
```js
const fs = require('fs');

router.get('/pedido', (req, res) => {
	const { sabores, tamanho, adicionais, total } = req.query;
	let template = fs.readFileSync(__dirname + '/template/pedido.html', 'utf8');
	template = template.replace('{sabores}', sabores)
									 .replace('{tamanho}', tamanho)
									 .replace('{adicionais}', adicionais)
									 .replace('{total}', total);
	res.send(template);
});
```
**Explicação:**
Esse trecho mostra como ler um arquivo HTML, substituir os placeholders pelos dados do pedido e enviar o HTML final para o usuário.

---
Projeto para estudo de Node.js, Express e manipulação de rotas e templates HTML.
