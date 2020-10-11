const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
    },
    password: String,
  }
);

//User.prototype.comparePassword = function (password) {
 // return bcrypt.compare(password, this.password);
module.exports = mongoose.model("User",userSchema);
