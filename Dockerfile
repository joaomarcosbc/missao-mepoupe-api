FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
COPY ecosystem.config.js ./

RUN npm install
RUN npm install -g pm2
RUN npm i -g rimraf

COPY . .

RUN npm run build

EXPOSE 3035

CMD ["pm2-runtime", "start", "ecosystem.config.js"]