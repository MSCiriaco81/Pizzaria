
# Pizzaria

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
Projeto para estudo de Node.js, Express e manipulação de rotas e templates HTML.
