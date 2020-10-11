const bcrypt = require("bcrypt");
const User = require("../models/User");
const Joi = require("joi");


module.exports = {
    async put(req, res) {
        try {

            const schema = {
                email: Joi.string().email(),
                password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
              };
              const email = req.body.email
              const password = req.body.password
              const user = {email, password}
              const { error } = Joi.validate(user, schema);       
        if (error) {
            switch (error.details[0].context.key) {
              case "email":
                res.status(400).send({
                  error: "You must provide a valid email address",
                });
                break;
              case "password":
                res.status(400).send({
                  error: `The password provided failed to match the following rules:
                    <br>
                    1. It must contain ONLY the following characters: lower case, upper case, numerics.
                    <br>
                    2. It must be at least 8 characters in length and not greater than 32 characters in length.
                  `,
                });
                break;
              default:
                res.status(400).send({
                  error: "Invalid registration information",
                });
            }
          } else{

          req.body.password = await bcrypt.hash(req.body.password, 10);
          const email = req.body.email
          const password = req.body.password
          const id = req.body._id;
          
          const user = await 
            User.findByIdAndUpdate(id, {email,password})
           .then(user => {res.send(user)})
        }
          }catch (error) {
          res.status(500).send({
            error: "An error has occured trying to update the user",
          });
        }
      },
    async show(req, res) {
        try {
          const user = await User.findById(req.params.userId);
          res.send(user);
        } catch (err) {
          res.status(500).send({
            error: "an error has occured trying to show the user",
          });
        }
      },
    async delete(req , res){
        try {
          const _id = req.params.userId;
          console.log(_id)
          User.deleteOne({_id:_id})
          .then(user => {res.status(200).send(user)})
        } catch (error) {
          res.status(500).send({
            error: "An error has occured trying to delete the user",
          });
        }
      }
}