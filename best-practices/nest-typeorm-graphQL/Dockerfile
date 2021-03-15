FROM node:15

RUN apt-get update && apt-get install -y netcat

WORKDIR /app

RUN npm install -g pm2

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install
COPY . .
RUN yarn build
RUN yarn test

COPY .env.sample ./.env
RUN chmod +x entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]