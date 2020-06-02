
const User = require("../models/User");
const UserType = require("../models/UserType");

module.exports = {

  async index(req, res){
    const users = await User.find();

    return res.json(users);
    //return res.json({"mensagem": "A sua lista de usuarios retornada com sucesso"});
  },
  async create(req, res){
    const {userName, email, password} = req.body;
    const cratedUser = await User.create({userName});
    return res.json(cratedUser);
  }
}