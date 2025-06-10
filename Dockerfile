FROM node:22-alpine

WORKDIR /app

COPY JWT/package*.json ./

RUN npm install

COPY JWT/ .

CMD ["node", "main.js"]