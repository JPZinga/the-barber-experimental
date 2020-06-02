
require('dotenv').config();

const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true});

const dataBase = {
  async connect(){
    try {
      await client.connect().then(() => {
        console.error(`Conexão com o banco de dados efectuada com sucesso!`)
      });
    }
    catch (e) { console.error(`Erro ao conectar ao Banco de dados:\n ${e}`)}
  }
}

module.exports = dataBase;