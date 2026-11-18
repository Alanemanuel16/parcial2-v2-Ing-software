# parcial2-v2-software

Servicio web de **control de stock** empaquetado con Docker, desarrollado como Ejercicio Integrador (Git + Docker) del Parcial 2.

| Dato | Detalle |
|------|---------|
| **Alumno** | _Nombre y Apellido del alumno_ |
| **Fecha** | 18 de noviembre de 2026 |
| **Materia** | Software |
| **Repositorio** | `parcial2-v2-software` |

## Descripción

Aplicación web estática (HTML + CSS + JavaScript) con una sección de bienvenida y un listado interactivo de productos en stock. Se sirve mediante **Nginx** sobre una imagen **Alpine** (`nginx:alpine`), lo que mantiene la imagen final muy liviana.

## Estructura del proyecto

```
parcial2-v2-software/
├── Dockerfile
├── .dockerignore
├── .gitignore
├── README.md
├── index.html
├── style.css
└── app.js
```

## Requisitos previos

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/) instalado y en ejecución

## Construir e iniciar el contenedor

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/<usuario>/parcial2-v2-software.git
   cd parcial2-v2-software
   ```

2. Construir la imagen:

   ```bash
   docker build -t parcial2-v2-software .
   ```

3. Iniciar el contenedor (publica el puerto 80 del contenedor en el 8080 local):

   ```bash
   docker run -d --name parcial2-web -p 8080:80 parcial2-v2-software
   ```

4. Abrir en el navegador: <http://localhost:8080>

## Comandos útiles

```bash
docker ps                      # ver contenedores en ejecución
docker logs parcial2-web       # ver logs de Nginx
docker stop parcial2-web       # detener el contenedor
docker rm parcial2-web         # eliminar el contenedor
```

## Flujo de trabajo Git

1. `main` – Commit 1: estructura base (README y .gitignore).
2. `main` – Commit 2: archivos de la aplicación y Dockerfile.
3. `feature-nueva-seccion` – nueva funcionalidad (panel de resumen de stock).
4. Merge de `feature-nueva-seccion` hacia `main`.
