const AuthenticationController = require("../controller/AuthenticationController");
const AuthenticationControllerPolicy = require("../policeis/AuthenticationContollerPolicy");
const SongsController = require("../controller/SongsController");
const UserController = require("../controller/UserController");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  app.get("/songs", SongsController.index);
  app.post("/songs", SongsController.post);
  app.get("/songs/:songId", SongsController.show);
  app.put("/songs/:songId", SongsController.put);
  app.delete("/songs/:songId",SongsController.delete);
  app.delete("/user/:userId",UserController.delete);
  app.get("/user/:userId", UserController.show);
  app.put("/user/:userId",UserController.put);


};
