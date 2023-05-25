FROM node:18-alpine

RUN mkdir -p /usr/src/app-frontend
WORKDIR /usr/src/app-frontend

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]