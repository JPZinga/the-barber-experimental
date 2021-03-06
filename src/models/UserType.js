
const mongoose = require("mongoose");

const UserTypeShema = mongoose.Schema({
  description: String,

  creationDate: { type: Date, default: Date.now() },
})

const UserType = mongoose.model("UserType", UserTypeShema);

module.exports = UserType;