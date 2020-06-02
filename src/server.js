
require('dotenv').config();

const express = require("express");
const app = express();
const database = require("./database");

database.connect();

app.get("/", (req, res) => { res.send("Hello word") });

app.listen(process.env.PORT, () => console.log(`Servidor inicializado na porta ${process.env.PORT}`) );