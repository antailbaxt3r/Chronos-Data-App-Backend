FROM node:alpine

WORKDIR /usr/src/chornos_data

COPY package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 4193

CMD ["npm", "start"]