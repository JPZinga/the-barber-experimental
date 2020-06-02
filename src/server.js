
require('dotenv').config();

const express = require("express");
const database = require("./database");
const routes = require("./routes");

database.connect();
const app = express();
app.use(express.json({extended: false}));
app.use(routes);

app.listen(process.env.PORT, () => console.log(`Servidor inicializado na porta ${process.env.PORT}`) );