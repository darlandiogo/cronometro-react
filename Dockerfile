FROM node:lts-alpine

COPY ./package*.json ./

RUN yarn install