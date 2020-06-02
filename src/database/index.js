
require('dotenv').config();

const mongoose = require("mongoose");

const dataBase = {
  async connect(){
    try {
      await mongoose.connect( process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
        console.error(`Conexão com o banco de dados efectuada com sucesso!`)
      });
    }
    catch (e) { console.error(`Erro ao conectar ao Banco de dados:\n ${e}`)}
  }
}

module.exports = dataBase;