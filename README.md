<br>

<h1 align="center">
API Backend de Entregas
</h1>

<br>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-informações-importantes">Importante!</a>
</p>

<br>

# Sobre o projeto

API Backend de Entregas é um projeto pessoal o qual teve como objetivos:

- Construir uma API Rest Completa
- Desenvolver um sistema CRUD de clientes, entregadores e entregas
- Aprimorar a utilização do TypeScript
- Reforçar os conhecimento do framework Express
- Reforçar os conhecimento para o uso correto dos recursos e verbos HTTP
- Aprender a utilizar o Prisma ORM para lidar com bando de dados
- Estruturar o banco de dados relacional PostgreSQL com schemas do Prisma
- Gerar Migrations para versionamento das tabelas do banco de dados
- Estruturar e lidar com Regras de Negócio da aplicação
- Aprimorar a elaboração de casos de uso onde são utilizados validações de autenticação, permissão de rotas e recursos
- Reforçar como fazer uma autenticação com JWT de forma eficiente
- Deixar a aplicação mais delegável com o uso de Middlewares
- Praticar e respeitar princípios SOLID na arquitetura de aplicações para deixar o código mais legível e limpo

### :rocket: Tecnologias e Principais Ferramentas:

- Typescript
- Node.js
- Express
- PostgreSQL
- Prisma
- JWT
- BCrypt.js
- Docker e Docker-Compose
- Husky

## :information_source: Como Usar?

1 - Para executar esta aplicação, você precisará ter instalado no seu computador:

- Git
- Node.js
- Yarn
- Docker com Docker Compose
- Postgres
- Postbird ou Beekeeper
- Insomnia

2 - Para rodar a aplicação, realize cada uma das etapas abaixo no terminal:

```bash
# Clone esse repositório:
$ git clone https://github.com/brunohsweber/backend-de-entregas

# Entre no repositório:
$ cd backend-de-entregas

# Instale as dependências:
$ yarn

# Instancie o Docker com Docker-Compose para subir o container e iniciar a aplicação:
$ docker-compose up

# Para rodar as migrations:
$ yarn prisma migration dev

# Para rodar a aplicação:
$ yarn dev

```
**Para acessar as rotas já configuradas pelo Insomnia, é possível importar o arquivo JSON:**
[Clique aqui para acessar o arquivo JSON](https://github.com/brunohsweber/backend-de-entregas/blob/main/collection_Insomnia.json)

<br>

## :warning: Informações Importantes

Este projeto está em versão inicial e novas features poderão ser lançadas futuramente.

<br>

---

Feito com ♥ por [Bruno Weber](https://brunoweber.com.br) :wave:
