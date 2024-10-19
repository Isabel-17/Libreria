# Etapa 1: Construcción
FROM node:21 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación
FROM nginx:alpine

# Copiar los archivos construidos de la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto en el que Nginx escucha
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
