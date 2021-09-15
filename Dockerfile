FROM node:14.15.4-alpine3.12

# instala o bash para mexer no terminal mais fácil
RUN apk add --no-cache bash

# https://github.com/jwilder/dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# instala o nest
RUN npm install -g @nestjs/cli@8.0.0

# usa o usuário node nativo da imagem
USER node

# define o diretório para próximos comandos
WORKDIR /home/node/app
