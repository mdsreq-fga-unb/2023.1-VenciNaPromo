FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g react --silent

RUN npm install --frozen-lockfile

RUN npm run build

EXPOSE 3001