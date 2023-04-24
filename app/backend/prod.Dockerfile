FROM node:18-alpine

ARG NODE_ENV=staging

WORKDIR /app

COPY . .

RUN npm install --silent
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]