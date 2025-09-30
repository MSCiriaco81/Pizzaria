
[⬅ Voltar para o README principal](./README.md)

# O que é Internet?

## Sumário
1. [O que é Internet?](#o-que-é-internet)
2. [História da Web, HTTP puro e Tópicos Básicos](#história-da-web-http-puro-e-tópicos-básicos)
3. [Versionamento e Trabalho em Equipe (Git)](#1-versionamento-e-trabalho-em-equipe-git)
4. [Serviços Web: Fundamentos e Protocolos](#2-serviços-web-fundamentos-e-protocolos)
5. [Node.js e Express (Projeto Pizzaria)](#3-nodejs-e-express-projeto-pizzaria)
6. [Promises, Callback, Async/Await (JS)](#4-promises-callback-asyncawait-js)
7. [Spring Boot (Projeto PizzariaWithSpring)](#5-spring-boot-projeto-pizzariawithspring)
8. [Comparação Node.js x Spring Boot](#6-comparação-nodejs-x-spring-boot)

# O que é Internet?
A Internet é uma rede mundial de computadores interligados que permite a comunicação e o compartilhamento de informações entre dispositivos em qualquer lugar do mundo. Ela utiliza protocolos de comunicação padronizados (como TCP/IP) para possibilitar o envio e recebimento de dados, suportando serviços como web, e-mail, transferência de arquivos, streaming e muito mais. A Internet é a base para o funcionamento da Web e de diversas aplicações modernas.

# Resumo DevWeb – Pizzaria (Node.js e Spring Boot)

## História da Web, HTTP puro e Tópicos Básicos
- A Web surgiu como uma forma de compartilhar documentos e informações de forma global.
- O protocolo HTTP (HyperText Transfer Protocol) é a base da comunicação web, permitindo a troca de dados entre clientes (navegadores) e servidores.
- HTTP puro refere-se ao uso direto do protocolo, sem frameworks, para enviar e receber requisições e respostas.
- Métodos HTTP principais: GET (buscar dados), POST (enviar dados), PUT (atualizar), DELETE (remover).
- Evolução: de páginas estáticas para aplicações dinâmicas e interativas, com uso de APIs e frameworks modernos.

## 1. Versionamento e Trabalho em Equipe (Git)
- **Git** é essencial para versionar código, colaborar em equipe e manter histórico de alterações.
- Fluxo básico: `clone`, `branch`, `commit`, `push`, `pull`.
- Branches facilitam o trabalho paralelo e a integração de novas funcionalidades.
- Pull Requests e revisões de código garantem qualidade e integração segura.

## 2. Serviços Web: Fundamentos e Protocolos
- **Serviços Web** permitem comunicação entre sistemas via HTTP.
- Protocolos comuns: REST (mais usado), SOAP (mais antigo).
- REST usa métodos HTTP (GET, POST, PUT, DELETE) e troca dados geralmente em JSON.
- APIs RESTful são simples, escaláveis e independentes de linguagem.

## 3. Node.js e Express (Projeto Pizzaria)
- **Node.js**: ambiente para executar JavaScript no servidor.
- **Express**: framework para criar APIs e servidores web de forma simples.
- Estrutura do projeto Node:
	- `index.html`: página inicial.
	- `template/cardapio.html`: formulário de pedido.
	- `template/pedido.html`: resumo do pedido.
	- `index.js`: define rotas e lógica do pedido.
	- `app.js`: configura o Express.
	- `server.js`: inicia o servidor.
	- `variables.env`: configurações de ambiente.
- Fluxo: usuário acessa página inicial → monta pedido → vê resumo.
- Manipulação de rotas, leitura de templates e passagem de dados entre páginas.

## 4. Promises, Callback, Async/Await (JS)
- **Callback**: função passada como argumento para ser executada depois.
- **Promise**: objeto que representa uma operação assíncrona.
- **Async/Await**: sintaxe moderna para lidar com Promises de forma mais legível.
- Uso em requisições HTTP, leitura de arquivos, etc.

## 5. Spring Boot (Projeto PizzariaWithSpring)
- **Spring Boot**: framework Java para criar aplicações web rapidamente.
- **MVC**: separação entre Model, View e Controller.
- Estrutura do projeto Spring:
	- `PizzariaApplication.java`: inicializa o app.
	- `controller/appController.java`: controla as rotas.
	- `templates/`: páginas HTML com Thymeleaf.
- Fluxo: usuário acessa `/index` → monta pedido → vê resumo.
- Uso de anotações (@Controller, @GetMapping, etc.) para definir rotas e lógica.
- Thymeleaf permite páginas dinâmicas com dados do backend.

## 6. Comparação Node.js x Spring Boot
- **Node.js/Express**: mais simples, rápido para prototipar, usa JS.
- **Spring Boot**: mais robusto, ideal para projetos maiores, usa Java.
- Ambos seguem o padrão de rotas, controllers e templates/views.

---
