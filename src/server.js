
require('dotenv').config();

const express = require("express");
const app = express();

const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true});

async function connectDB(){
  try {
    await client.connect().then(() => {
      console.error(`Conexão com o banco de dados efectuada com sucesso!`)
    });
  }
  catch (e) { console.error(`Erro ao conectar ao Banco de dados:\n ${e}`);}
}

connectDB();

app.get("/", (req, res) => { res.send("Hello word") });

app.listen(process.env.PORT, () => console.log(`Servidor inicializado na porta ${process.env.PORT}`) );