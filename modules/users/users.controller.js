const userCore = require("./users.core");

const usersController = {
  getUsers: async (req, res, next) => {
    try {
      let getUsers = await userCore.getUsers();
      return res.status(200).send(getUsers);
    } catch (error) {
      return next(error);
    }
  },

  getUser: async (req, res, next) => {
    //TODO: SACAR LOS CAMPOS COMO PASS
    let id = req.body.id || req.params.id;
    try {
      let getUser = await userCore.getUser(id);
      return res.status(200).send(getUser);
    } catch (error) {
      return next(error);
    }
  },

  editUser: async (req, res, next) => {
    let id = req.body.id || req.params;
    let user = req.body;
    try {
      await userCore.editUser(id, user);
      return res
        .status(200)
        .send(`The name ${user.username} has been successfully modified`);
    } catch (error) {
      return next(error);
    }
  },

  delUser: async (req, res, next) => {
    let id = req.body.id || req.params;
    try {
      const delUser = await userCore.delUser(id);
      //TODO: ESTA LOGICA NO SE SI DEBERIA IR ACA, INHABILITARIA EL CATCH?
      if (delUser)
        return res
          .status(200)
          .send(`User ${delUser}, was successfully eliminated`);
      else return res.status(404).send(`The user does not exist`);
    } catch (error) {
      return next(error);
    }
  },

  login: async (req, res, next) => {
    let body = req.body;
    try {
      let user = await userCore.login(body);
      return res.status(200).send({ data: user });
    } catch (error) {
      return next(error);
    }
  },

  register: async (req, res, next) => {
    let user = req.body;
    try {
      await userCore.register(user);
      return res
        .status(201)
        .send({ msg: `User ${user.username} was successfully created` });

    } catch (error) {
      return next(error);
    }
  },

  refreshToken: async (req, res, next) => {
    let token = req.headers["token"];

    try {
      let refToken = await userCore.refresh(token);
      if (!refToken) {
        return res.status(404).json({ msg: "Invalid token" });
      }
      return res.status(200).send(refToken);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = usersController;
