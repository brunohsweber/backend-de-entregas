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

API Backend de Entregas é um projeto pessoal com finalidade de .

O objetivo deste projeto é de construir uma API completa para aluguéis de carros, daí a origem do nome _RentX_.

Resumidamente, este projeto possibilita o gerenciamento completo de usuários, carros e aluguéis.

A construção do RentX tem como objetivo também aprender conceitos avançados de uma API e conhecer ferramentas e tecnologias para construir aplicações robustas, flexíveis e escaláveis com o uso do Node.js. E, para garantir a integralidade do código, está sendo utilizada a linguagem Typescript.

Este projeto está sendo desenvolvido aos poucos. A cada avanço nos módulos do treinamento é proposto um novo desafio para aumentar a complexidade e funcionalidades desta aplicação.

### :books: Documentação:

A documentação da API deste projeto está sendo construída com o Swagger e encontra-se na rota: http://localhost:3333/api-docs/

:warning: Atenção: Documentação ainda está em construção!

### :rocket: Tecnologias e Principais Ferramentas:

- Typescript
- Node.js
- Express
- PostgreSQL
- Prisma
- Autenticação com JWT
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
[Clique aqui para fazer o download do arquivo JSON](https://drive.google.com/file/d/1vZarJXXk4mMvNw5fw2SALizO_3ITM5h4/view?usp=sharing)

<br>

## :warning: Informações Importantes

Este projeto ainda está **em desenvolvimento** e novas features serão lançadas nas próximas semanas.

#### ÚLTIMA *FEATURE* LANÇADA: Criação de aluguel (create rental)

<br>

---

Feito com ♥ por [Bruno Weber](https://brunoweber.com.br) :wave:
