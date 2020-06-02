
const mongosse = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongosse.Schema({

  userName: {
    type: String,
    required: true,
  },
  
  userType: { 
    type: Schema.Types.ObjectId, 
    ref: "UserType" 
  },
  
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  
  password: {
    type: String,
    required: true,
    select: false,
  },
  
  createAt: { 
    type: Date, 
    default: Date.now(), 
  },

});

UserSchema.pre("save", async function(next){
  const hash = await bcrypt.hash(this.password, 13);
  this.password = hash;

  next();
});

const User = mongosse.Model("User", UserSchema);

module.exports = User;