# Tarea 1 - API
### Nombre y carné de los integrantes: Antony Campbell Ortega, Carnet: 2024174749

### Estado del proyecto: Medio

## 1. Introducción
Este proyecto implementa una API en Node.js que se comunica con una base de datos Microsoft SQL Server especificamente la de AdventureWorks2025 alojada en Fedora Linux. El objetivo es exponer operaciones CRUD a través de Procedimientos Almacenados.

## 2. Instalación de Requerimientos Paso a Paso

### 2.1. Instalación de SQL Server en Fedora Linux
1. Añadir el repositorio oficial:
   `sudo curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/9/mssql-server-2025.repo`
2. Instalar el motor de bases de datos: `sudo dnf install -y mssql-server`
3. Ejecutar configuración inicial: `sudo /opt/mssql/bin/mssql-conf setup`

### 2.2. Instalación de Node.js
Ejecutar en la terminal de Fedora: `sudo dnf install -y nodejs npm`

### 2.3. Configuración de la Base de Datos
1. Mover el archivo backup: `sudo cp AdventureWorks2025.bak /var/opt/mssql/data/`
2. Ajustar permisos: `sudo chown mssql:mssql /var/opt/mssql/data/AdventureWorks2025.bak`
3. Restaurar la base de datos reubicando los archivos (`.mdf` y `.ldf`) a `/var/opt/mssql/data/`.
4. Ejecutar el script SQL para crear los Stored Procedures.

## 3. Instalación de Programas y Configuración de Servicios
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar Express y mssql.
3. En `index.js`, configurar las credenciales (usuario `sa` y contraseña).
4. Iniciar el servicio con `node index.js`. La API escuchará en el puerto 3000.

## 4. Datos de Prueba
Para POST
```json
{
  "Name": "Sucursal Limón"
}
```

Para PUT
```json
{
  "Name": "Bodega Principal Limón"
}
```


### 5. Enlace del video: https://youtu.be/aKAOFs4D5lc?si=rzpFFmrz6IdzG5aV
