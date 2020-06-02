
const express = require("express");

const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.listen(port, () => {
  console.log(`Servidor inicializado na porta ${port}`);
});