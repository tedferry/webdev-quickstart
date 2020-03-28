FROM node:latest

WORKDIR /app

RUN mkdir node_modules

COPY package*.json package.json ./

RUN npm install

EXPOSE 8080
