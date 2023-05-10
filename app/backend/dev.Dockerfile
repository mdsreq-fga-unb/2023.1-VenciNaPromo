FROM node:18-alpine

RUN mkdir -p /usr/src/app-backend
WORKDIR /usr/src/app-backend

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm" , "start"]