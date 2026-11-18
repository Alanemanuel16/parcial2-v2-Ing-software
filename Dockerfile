# Imagen base liviana con Nginx sobre Alpine
FROM nginx:alpine

# Copiar los archivos estáticos de la aplicación al directorio público de Nginx
COPY index.html style.css app.js /usr/share/nginx/html/

# Nginx escucha en el puerto 80
EXPOSE 80

# El CMD por defecto de nginx:alpine ya inicia el servidor en primer plano
