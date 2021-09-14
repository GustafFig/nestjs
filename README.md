# Nestjs

Repositório sobre o desafio de nest do fullcycle, usando nestjs, docker, sequelize, typescript.

## O Desafio

Neste desafio você deverá criar uma API REST que tenha dois endpoints:


- GET /transactions
- POST /transactions


Os dados da transação serão:


* id
* type -> credit ou debit
* amount


Ao fazer o cadastro os dados deverão ser validados pelo class-validator como feito na primeira aula.

A persistência de dados deve ser feita com Sequelize e o banco de dados deverá ser o sqlite.


Monte um ambiente com Docker Compose para subir toda a aplicação, ela deverá rodar na porta 3000.
Ao fazer um docker-compose up todo ambiente deverá estar pronto para só acessar http://localhost:3000/transactions


Crie uma foto de uma parte interessante do seu código usando a Extensão "Code Snap" do VSCode e salve na raiz do projeto com o nome "print.png".


Bons estudos!
