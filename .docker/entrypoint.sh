#!/bin/bash

# Se não existir .env neste diretório ele
# cria uma apartir do arquivo de exemplo
if [ ! -f ".env" ]; then
  cp .env.example .env
fi

# levanta a aplicação
npm install
npm run start:dev
