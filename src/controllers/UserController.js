
const User = require("../models/User");
const UserType = require("../models/UserType");

module.exports = {

  async index(req, res){
    const users = await User.find();

    return res.json(users);
    //return res.json({"mensagem": "A sua lista de usuarios retornada com sucesso"});
  }

}