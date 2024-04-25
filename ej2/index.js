// const express = require("express");
// const app = express();
// const PORT = 3000;


app.get("/", (req, res) => {
  res.send("Bienvenidos a este servidor");
});

app.get("/Productos", (req, res) => {
  res.send("Listado de productos");
});

app.post("/Productos", (req, res) => {
  res.status(201).send("Crear producto");
});

app.put("/Productos", (req, res) => {
  res.send("actualizar un producto");
});

app.delete("/Productos", (req, res) => {
  res.send("borrar un producto");
});

app.get("/Usuarios", (req, res) => {
  res.send("listado de usuarios");
});

app.post("/Usuarios", (req, res) => {
  res.status(201).send("crear usuario");
});

app.put("/Usuarios", (req, res) => {
  res.send("actualizar usuario");
});

app.delete("/Usuarios", (req, res) => {
  res.send("borrar usuario")
});
// app.listen(PORT, () => {
//   console.log(`Servidor levantado en el puerto ${PORT}`);
// });
