FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm installs

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
