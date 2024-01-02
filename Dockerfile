FROM node:21.0.0

WORKDIR /app

COPY package*.json /app/

COPY src /app/

RUN npm install

CMD ["node", "index.js"]

