
# Version Node Simple
FROM node:alpine

# Pasta principal Docker
WORKDIR /usr/app

# Pacote de instalações NPM e RUN do modulo
COPY package*.json ./
RUN npm install
COPY . .

# PORT NODE
EXPOSE 3000

# Comando de Inicialização 
CMD ["npm", "start"]

