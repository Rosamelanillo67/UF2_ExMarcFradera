const mysql = require('mysql2')
const express = require("express");
const app = express();
const cors = require('cors');

const {crearConfigBaseDades} = require("./db.config")
const db = crearConfigBaseDades();


app.use(cors());
app.use(express.json());

port = 3300;

db.sync().then (() => {
  console.log("Drop and re-sync db.");
});
app.listen(port, () => {
  console.log(`server lisening on the port::${port}`);
})
app.post('/api/departamentos', async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const nuevoDepartamento = await Departamento.create({ nombre, descripcion });
    res.status(201).json(nuevoDepartamento);
  } catch (error) {
    console.error('Error al insertar departamento:', error);
    res.status(500).send('No puc, pelacanyes');
  }
});








