FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g react --silent

RUN npm install --frozen-lockfile

RUN npm run build


FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]