const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
const items = [
  { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
  { id: 2, nombre: "FIFA 23 PS5", precio: 1000 },
  { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
  { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
  { id: 5, nombre: "Skin Valorant", precio: 120 },
  { id: 6, nombre: "Taza de Star Wars", precio: 220 },
];

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});

app.get("/productos", (req, res) => {
  res.send({ description: "Productos", items });
});

app.post("/productos", (req, res) => {
  const nuevoProducto = {
    id: items.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio,
  };
  items.push(nuevoProducto);
  res.status(201).send(items);
  console.log(nuevoProducto);
});

app.put("/id/:id", (req, res) => {
  const found = items.some((item) => item.id == req.params.id);
  if (found) {
    items.forEach((item) => {
      if (item.id == req.params.id) {
        // item.name =req.body.name || item.name
        item.nombre = req.body.nombre ? req.body.nombre : item.nombre;
        item.precio = req.body.precio || item.precio;
      }
    });
    res.send(items);
  } else {
    res.status(404).send(`Item with id ${req.params.id} not found`);
  }
});

app.delete("/id/:id", (req, res) => {
  const found = items.some((item) => item.id == req.params.id);
  if (found) {
    const itemFilter = items.filter((item) => item.id != req.params.id);
    res.send(itemFilter);
  } else {
    res.status(404).send(`Item with id ${req.params.id} not found`);
  }
});

app.get("/productos/:precio", (req, res) => {
  const precio = parseInt(req.params.precio);

  const filteredItems = items.filter((item) => {
    return item.precio === precio;
  });

  if (filteredItems.length > 0) {
    res.send(filteredItems);
  } else {
    res.status(404).send(`Items with precio ${precio} not found`);
  }
});

app.get("/precios/:precio", (req, res) => {
  const precio = parseInt(req.params.precio);

  const filteredItems = items.filter((item) => {
    return item.precio >= 50 && item.precio <= 250;
  });

  if (filteredItems.length > 0 || filteredItems >= 50 || filteredItems <= 250) {
    res.send(filteredItems);
  } else {
    res.status(404).send(`Items with precio ${precio} not found`);
  }
});

app.get("/producto/:id", (req, res) => {
    const producto = items.filter((item) => item.id === +req.params.id);

    if (producto) {
      res.send(producto);
    } else {
      res.status(404).send("Producto no encontrado");
    }
  });

  app.get("/producto/", (req, res) => {
      const producto = items.filter((item) => item.nombre == req.query.nombre);
      console.log(req.query.nombre);
      if (producto) {
        res.send(producto);
      } else {
        res.status(404).send("Producto no encontrado");
      }
});