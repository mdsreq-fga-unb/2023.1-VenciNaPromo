FROM node:18-alpine

RUN mkdir -p /svr/app

WORKDIR /svr/app

RUN npm i -g @nestjs/cli --silent

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:debug"]