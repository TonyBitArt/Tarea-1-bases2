// Imports de dependencias
const express = require("express"); // framework para crear la api
const sql = require("mssql"); // paquete para conectarse a SQL Server

// Configuración de Express
const app = express(); // objeto de la aplicación
app.use(express.json()); // permite recibir datos en formato JSON en las solicitudes

// Configuración de la conexión
const dbConfig = {
  user: "sa",
  password: "ingrese su credencial",
  server: "localhost",
  database: "AdventureWorks2025",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Conectar a la base de datos
sql
  .connect(dbConfig)
  .then(() => console.log("Conectado a SQL Server"))
  .catch((error) => console.log("Error: ", error));

// Rutas de la API

// GET - Consulta Simple
app.get("/api/addressTypes", async (request, response) => {
  const result = await sql.query`EXEC Person.GetAddressTypes`;
  response.json(result.recordset);
});

// GET - Consulta con JOIN
app.get("/api/addressesWithState", async (request, response) => {
  const result = await sql.query`EXEC Person.GetAddressesWithState`;
  response.json(result.recordset);
});

// POST - Insertar
app.post("/api/addressTypes", async (request, response) => {
  const { Name } = request.body;
  await sql.query`EXEC Person.InsertAddressType @Name = ${Name}`;
  response.json({ message: "Insertado correctamente" });
});

// PUT - Actualizar
app.put("/api/addressTypes/:id", async (request, response) => {
  const { Name } = request.body;
  await sql.query`EXEC Person.UpdateAddressType @AddressTypeID = ${request.params.id}, @Name = ${Name}`;
  response.json({ message: "Actualizado correctamente" });
});

// DELETE - Borrar
app.delete("/api/addressTypes/:id", async (request, response) => {
  await sql.query`EXEC Person.DeleteAddressType @AddressTypeID = ${request.params.id}`;
  response.json({ message: "Borrado correctamente" });
});

// Iniciar servidor
app.listen(3000, () => console.log("API corriendo en http://localhost:3000"));
