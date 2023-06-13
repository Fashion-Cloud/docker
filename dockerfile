FROM node:16 as build

WORKDIR /frontend
COPY ./package.json .

RUN  npm install

COPY . /frontend
RUN npm run build