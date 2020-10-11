const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const bcrypt = require("bcrypt");

function jwtSignUser(user) {
  const ONE_WEEk = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEk,
  });
}

module.exports = {
  async register(req, res) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const email = req.body.email
      const password = req.body.password
      
      const user = await new User({email , password});
      user.save();
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (error) {
      res.status(400).send({
        error: "this user is already in use",
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({
          email: email,
      },function(err , result){return result})

      
      if (!user) {
        res.status(403).send({
          error: "the login information was incorrect",
        });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(403).send({
          error: "the login information was incorrect",
        });
      }

      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (error) {
      res.status(500).send({
        error: "An error has been occured trying to log in",
      });
    }
  },
  async songs() {},
};
