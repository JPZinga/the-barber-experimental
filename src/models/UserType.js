
const mongoose = require("mongoose");

const UserTypeShema = mongoose.Schema({
  description: String,

  creationDate: { type: Date, default: Date.now() },
})

const UserType = mongoose.Model("UserType", UserTypeShema);

module.exports = UserType;